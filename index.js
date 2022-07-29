// IMPORTS

import { Groups } from "./classes/Groups.js";
import { Team } from "./classes/Teams.js";
import { Leagues } from "./classes/Leagues.js";
import { match } from "./modules/match.js";
import { matchNoDraw } from "./modules/matchNoDraw.js";

// DATOS (league, equipos, grupos...)

// Crear equipos
let spain = new Team("España");
let england = new Team("Inglaterra");
let netherlands = new Team("Países Bajos");
let germany = new Team("Alemania");
let denmark = new Team("Dinamarca");
let normay = new Team("Noruega");
let sweden = new Team("Suecia");
let france = new Team("Francia");
let belgium = new Team("Bélgica");
let iceland = new Team("Islandia");
let finland = new Team("Finlandia");
let austria = new Team("Austria");
let italy = new Team("Italia");
let switzerland = new Team("Suiza");
let northernIreland = new Team("Irlanda del N.");
let portugal = new Team("Portugal");

// Los meto en teamList
let teamList = [];

teamList.push(spain);
teamList.push(england);
teamList.push(netherlands);
teamList.push(germany);
teamList.push(denmark);
teamList.push(normay);
teamList.push(sweden);
teamList.push(france);
teamList.push(belgium);
teamList.push(iceland);
teamList.push(finland);
teamList.push(austria);
teamList.push(italy);
teamList.push(switzerland);
teamList.push(northernIreland);
teamList.push(portugal);

//Los desordeno
teamList.sort(function () {
    return Math.random() - 0.5;
});

// Los reparto en los 4 grupos
const groupA = new Groups("Grupo A", teamList.splice(0, 4));
const groupB = new Groups("Grupo B", teamList.splice(0, 4));
const groupC = new Groups("Grupo C", teamList.splice(0, 4));
const groupD = new Groups("Grupo D", teamList.splice(0, 4));

const groups = [groupA, groupB, groupC, groupD];

// Creo la liga
const leagueName = "EURO WOMEN'S CUP";
const league = new Leagues(leagueName, teamList, groups);

/* ------------- PARTE OPCIONAL DE LA PRÁCTICA ------------- */

// Mostrar Grupos, Equipos, y Jornadas
console.log("Groups y equipos");
console.log("===============================");

for (let group of league.groups) {
    console.log(`${group.name}
-----------------------`);
    for (let team of group.teams) {
        console.log(team.name);
    }
    console.log();
    for (let matchDay of league.matchDays) {
        console.log(matchDay.name);
        console.log(
            `${group.teams[matchDay.matchSchedule[0]].name} vs ${
                group.teams[matchDay.matchSchedule[1]].name
            }`
        );
        console.log(
            `${group.teams[matchDay.matchSchedule[2]].name} vs ${
                group.teams[matchDay.matchSchedule[3]].name
            }`
        );
        console.log();
    }
}

console.log("====================================================");
console.log("=========== COMIENZA LA EURO WOMEN’s CUP ===========");
console.log("====================================================");
console.log();

// Simular partidos
for (let matchDay of league.matchDays) {
    for (let group of league.groups) {
        console.log(`${group.name} - ${matchDay.name}:`);
        console.log("----------------------------");
        match(
            group.teams[matchDay.matchSchedule[0]],
            group.teams[matchDay.matchSchedule[1]]
        );
        match(
            group.teams[matchDay.matchSchedule[2]],
            group.teams[matchDay.matchSchedule[3]]
        );
        console.log();

        // Configurar cómo se muestra la tabla creando una copia de la lista de equipos
        // NOTA: hago una copia para evitar que al reordenarse los equipos me cambie los partidos también
        let teamTable = group.teams.map(function (team) {
            return {
                Equipo: team.name,
                Puntos: team.config.points,
                "Goles a favor": team.config.goals,
                "Goles en contra": team.config.goalsAgainst,
                "Diferencia de goles": team.config.goalsDif,
            };
        });

        // Ordenar y mostrar tabla clasificatoria al final de cada jornada
        teamTable.sort(function (a, b) {
            if (b["Puntos"] > a["Puntos"]) return 1;
            if (b["Puntos"] < a["Puntos"]) return -1;
            if (b["Puntos"] == a["Puntos"]) {
                if (b["Diferencia de goles"] > a["Diferencia de goles"])
                    return 1;
                if (b["Diferencia de goles"] < a["Diferencia de goles"])
                    return -1;
                if (b["Diferencia de goles"] == a["Diferencia de goles"]) {
                    if (b["Equipo"] > a["Equipo"]) return -1;
                    if (b["Equipo"] < a["Equipo"]) return 1;
                }
            }
        });

        console.table(teamTable);
        console.log();
    }
}

// Ordeno la clasificación final de equipos en la lista original para que entren correctamente a los playoff

for (let group of league.groups) {
    group.teams.sort(function (a, b) {
        if (b.config.points > a.config.points) return 1;
        if (b.config.points < a.config.points) return -1;
        if (b.config.points == a.config.points) {
            if (b.config.goalsDif > a.config.goalsDif) return 1;
            if (b.config.goalsDif < a.config.goalsDif) return -1;
            if (b.config.goalsDif == a.config.goalsDif) {
                if (b.name > a.name) return -1;
                if (b.name < a.name) return 1;
            }
        }
    });
}

/* ------------- PARTE OBLIGATORIA DE LA PRÁCTICA ------------- */
// Esta parte creo que es bastante clara y autoexplicativa... no hacen falta comentarios

console.log("====================================================");
console.log("=== COMIENZAN LAS FASES ELIMINATORIAS DEL TORNEO ===");
console.log("====================================================");
console.log();
console.log("Equipos que participan en team playoff:");
console.log();

for (let group of league.groups) {
    console.log(
        `${group.name}: ${group.teams[0].name}, ${group.teams[1].name}`
    );
}

console.log();
console.log("===== CUARTOS DE FINAL =====");

const c1 = matchNoDraw(groupA.teams[0], groupB.teams[1]);
const c2 = matchNoDraw(groupB.teams[0], groupA.teams[1]);
const c3 = matchNoDraw(groupC.teams[0], groupD.teams[1]);
const c4 = matchNoDraw(groupD.teams[0], groupC.teams[1]);

console.log();
console.log("===== SEMIFINALES =====");

const s1 = matchNoDraw(c1.winner, c3.winner);
const s2 = matchNoDraw(c2.winner, c4.winner);

console.log();
console.log("===== TERCER Y CUARTO PUESTO =====");

const thirdPosition = matchNoDraw(s1.loser, s2.loser);

console.log();
console.log("===== FINAL =====");

const champion = matchNoDraw(s1.winner, s2.winner);
const secondPosition = champion.loser;

console.log();
console.log("===============================================");
console.log(`¡${champion.winner.name} campeona de la ${league.name}!`);
console.log("===============================================");

// EXTRA: Podium con los 3 primeros puestos :D
console.log(`
                        ${champion.winner.name}
                     _______________
    ${secondPosition.name}
 _______________    |               |
|               |   |               |       ${thirdPosition.winner.name}
|               |   |       1       |    _______________
|       2       |   |               |   |               |
|               |   |               |   |       3       |
_________________________________________________________
`)
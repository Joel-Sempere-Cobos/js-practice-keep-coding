// VARIABLES

let teamList = [];

const liga = {
    name: "Euro Women's League",
    teams: teamList,
    jornadas: [
        {
            name: "Jornada 1",
            matchSchedule: [0, 3, 1, 2],
        },
        {
            name: "Jornada 2",
            matchSchedule: [3, 2, 0, 1],
        },
        {
            name: "Jornada 3",
            matchSchedule: [1, 3, 2, 0],
        },
    ],
};

class Grupos {
    constructor(name, teams) {
        this.name = name;
        this.teams = teams;
    }
}

import { Team } from "./classes/Teams.js";

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
let northernIreland = new Team("Irlanda del Norte");
let portugal = new Team("Portugal");

let team1;
let team2;

// PROCESOS

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

teamList.sort(function () {
    return Math.random() - 0.5;
});

const grupoA = new Grupos("Grupo A", teamList.splice(0, 4));
const grupoB = new Grupos("Grupo B", teamList.splice(0, 4));
const grupoC = new Grupos("Grupo C", teamList.splice(0, 4));
const grupoD = new Grupos("Grupo D", teamList.splice(0, 4));

const groups = [grupoA, grupoB, grupoC, grupoD];

// SIMULACIÓN DE PARTIDOS

function match(equipo1, equipo2) {
    let count1 = 0;
    let count2 = 0;
    let timmer = 0;

    const team1min = 0.62;
    const teamChange = 0.8;
    const team2max = 0.98;

    function contarGoles() {
        const randomNum = Math.random();
        if (team1min < randomNum && randomNum < teamChange) {
            count1++;
        } else if (teamChange < randomNum && randomNum < team2max) {
            count2++;
        }
    }

    while (timmer < 10) {
        contarGoles();
        timmer++;
    }

    function whoWins(equipo1, equipo2) {
        equipo1.config.goals += count1;
        equipo1.config.goalsAgainst += count2;
        equipo1.config.goalsDif += count1 - count2;
        equipo2.config.goals += count2;
        equipo2.config.goalsAgainst += count1;
        equipo2.config.goalsDif += count2 - count1;

        if (count1 > count2) {
            equipo1.config.points += 3;
            return equipo1;
        } else if (count1 < count2) {
            equipo2.config.points += 3;
            return equipo2;
        } else {
            equipo1.config.points += 1;
            equipo2.config.points += 1;
        }
    }

    function whoLose(equipo1, equipo2) {
        if (count1 < count2) {
            return equipo1;
        } else {
            return equipo2;
        }
    }

    const winner = whoWins(equipo1, equipo2);
    const loser = whoLose(equipo1, equipo2);

    console.log(`${equipo1.name} ${count1} - ${count2} ${equipo2.name}`);

    return { winner, loser };
}

function matchNoDraw(equipo1, equipo2) {
    let count1 = 0;
    let count2 = 0;
    let timmer = 0;

    const team1min = 0.62;
    const teamChange = 0.8;
    const team2max = 0.98;

    function contarGoles() {
        const randomNum = Math.random();
        if (team1min < randomNum && randomNum < teamChange) {
            count1++;
        } else if (teamChange < randomNum && randomNum < team2max) {
            count2++;
        }
    }

    while (timmer < 10) {
        contarGoles();
        timmer++;
    }

    while (count1 == count2) {
        contarGoles();
    }

    function whoWins(equipo1, equipo2) {
        if (count1 > count2) {
            equipo1.config.points += 3;
            equipo1.config.goals += count1;
            equipo1.config.goalsAgainst += count2;
            equipo1.config.goalsDif += count1 - count2;
            return equipo1;
        } else {
            equipo2.config.points += 3;
            equipo2.config.goals += count2;
            equipo2.config.goalsAgainst += count1;
            equipo2.config.goalsDif += count2 - count1;

            return equipo2;
        }
    }

    function whoLose(equipo1, equipo2) {
        if (count1 < count2) {
            return equipo1;
        } else {
            return equipo2;
        }
    }

    const winner = whoWins(equipo1, equipo2);
    const loser = whoLose(equipo1, equipo2);

    console.log(
        `${equipo1.name} ${count1} - ${count2} ${equipo2.name} => ${winner.name} `
    );

    return { winner, loser };
}

// PRESENTACIÓN

// OPCIONAL

console.log("Grupos y equipos");
console.log("===============================");

for (let group of groups) {
    console.log(`${group.name}
-----------------------`);
    for (let team of group.teams) {
        console.log(team.name);
    }
    console.log();
    for (let jornada of liga.jornadas) {
        console.log(jornada.name);
        console.log(
            `${group.teams[jornada.matchSchedule[0]].name} vs ${
                group.teams[jornada.matchSchedule[1]].name
            }`
        );
        console.log(
            `${group.teams[jornada.matchSchedule[2]].name} vs ${
                group.teams[jornada.matchSchedule[3]].name
            }`
        );
        console.log();
    }
}

console.log("====================================================");
console.log("=========== COMIENZA LA EURO WOMEN’s CUP ===========");
console.log("====================================================");
console.log();


for (let jornada of liga.jornadas) {
    for (let group of groups) {
        console.log(`${group.name} - ${jornada.name}:`);
        console.log("----------------------------");
        match(
            group.teams[jornada.matchSchedule[0]],
            group.teams[jornada.matchSchedule[1]]
        );
        match(
            group.teams[jornada.matchSchedule[2]],
            group.teams[jornada.matchSchedule[3]]
        );
        console.log();

        let teamTable = group.teams.map(function (team) {
            return {
                "Equipo": team.name,
                "Puntos": team.config.points,
                "Goles a favor": team.config.goals,
                "Goles en contra": team.config.goalsAgainst,
                "Diferencia de goles": team.config.goalsDif,
            };
        });

        teamTable.sort(function (a, b) {
            if (b["Puntos"] > a["Puntos"]) return 1;
            if (b["Puntos"] < a["Puntos"]) return -1;
            if (b["Puntos"] == a["Puntos"]) {
                if (b["Diferencia de goles"] > a["Diferencia de goles"]) return 1;
                if (b["Diferencia de goles"] < a["Diferencia de goles"]) return -1;
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

for (let group of groups){

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

//OBLIGATORIO

console.log("====================================================");
console.log("=== COMIENZAN LAS FASES ELIMINATORIAS DEL TORNEO ===");
console.log("====================================================");
console.log();
console.log("Equipos que participan en team playoff:");
console.log();

for (let group of groups) {
    console.log(
        `${group.name}: ${group.teams[0].name}, ${group.teams[1].name}`
    );
}

console.log();
console.log("===== CUARTOS DE FINAL =====");

const c1 = matchNoDraw(grupoA.teams[0], grupoB.teams[1]);
const c2 = matchNoDraw(grupoB.teams[0], grupoA.teams[1]);
const c3 = matchNoDraw(grupoC.teams[0], grupoD.teams[1]);
const c4 = matchNoDraw(grupoD.teams[0], grupoC.teams[1]);

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
console.log(`¡${champion.winner.name} campeona de la EURO WOMEN’S CUP!`);
console.log("===============================================");
/* 
console.log(`Points: ${champion.winner.config.points}`);
console.log(`Goals: ${champion.winner.config.goals}`);
console.log(`GoalsAgainst: ${champion.winner.config.goalsAgainst}`); */

// VARIABLES

let teamList = [];

const liga = {
    name: "Euro Women's League",
    teams: teamList,
    rounds: [],
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

    const team1min = 0.6;
    const team1max = 0.8;
    const team2min = 0.8;
    const team2max = 1;

    function contarGoles() {
        const randomNum = Math.random();
        if (team1min < randomNum && randomNum < team1max) {
            count1++;
        } else if (team2min < randomNum && randomNum < team2max) {
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
            return equipo1;
        } else {
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

    console.log(`${equipo1} ${count1} - ${count2} ${equipo2} => ${winner} `);

    return { winner, loser };
}

// OPCIONAL

/* console.log("Grupos y equipos")
console.log("===============================")

for (let group of groups) {
    console.log(`${group.name}
-----------------------`);
    for (let team of group.teams){
        console.log(team.name)
    }
    console.log()
}
 */

//OBLIGATORIO

console.log("====================================================");
console.log("=== COMIENZAN LAS FASES ELIMINATORIAS DEL TORNEO ===");
console.log("====================================================");
console.log();
console.log("Equipos que participan en el playoff:");
console.log();

for (let group of groups) {
    console.log(
        `${group.name}: ${group.teams[0].name}, ${group.teams[1].name}`
    );
}

console.log();
console.log("===== CUARTOS DE FINAL =====");

const c1 = match(grupoA.teams[0].name, grupoB.teams[1].name);
const c2 = match(grupoB.teams[0].name, grupoA.teams[1].name);
const c3 = match(grupoC.teams[0].name, grupoD.teams[1].name);
const c4 = match(grupoD.teams[0].name, grupoC.teams[1].name);

console.log();
console.log("===== SEMIFINALES =====");

const s1 = match(c1.winner, c3.winner);
const s2 = match(c2.winner, c4.winner);

console.log();
console.log("===== TERCER Y CUARTO PUESTO =====");

const subChampion = match(s1.loser, s2.loser);

console.log();
console.log("===== FINAL =====");

const champion = match(s1.winner, s2.winner);

console.log();
console.log("===============================================");
console.log(`¡${champion.winner} campeona de la EURO WOMEN’S CUP!`);
console.log("===============================================");

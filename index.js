console.log("====================================================");
console.log("=== COMIENZAN LAS FASES ELIMINATORIAS DEL TORNEO ===");
console.log("====================================================");
console.log();
console.log("Equipos que participan en el playoff:");
console.log();

// Declarar variables

let teamList = []

const liga = {
    name: "Euro Women's League",
    teams: teamList,
    rounds: []
}

class Team {
    constructor(name){
        this.name = name
        this.points = 0
        this.goals = 0
        this.goalsAgainst = 0
    }
}

let spain = new Team("España")
teamList.push(spain)
let england = new Team("Inglaterra")
teamList.push(england)
let netherlands = new Team("Países Bajos")
teamList.push(netherlands)
let germany = new Team("Alemania")
teamList.push(germany)

let denmark = new Team("Dinamarca")
teamList.push(denmark)
let normay = new Team("Noruega")
teamList.push(normay)
let sweden = new Team("Suecia")
teamList.push(sweden)
let france = new Team("Francia")
teamList.push(france)

let belgium = new Team("Bélgica")
teamList.push(belgium)
let iceland = new Team("Islandia")
teamList.push(iceland)
let finland = new Team("Finlandia")
teamList.push(finland)
let austria = new Team("Austria")
teamList.push(austria)

let italy = new Team("Italia")
teamList.push(italy)
let switzerland = new Team("Suiza")
teamList.push(switzerland)
let northernIreland = new Team("Irlanda del Norte")
teamList.push(northernIreland)
let portugal = new Team("Portugal")
teamList.push(portugal)


teamList.sort(function() {return Math.random() - 0.5})





// DECLARO GRUPOS COMO OBJETOS y los meto en un array

class Grupos {
    constructor(name, teams) {
        this.name = name;
        this.teams = teams;
    }
}

const grupoA = new Grupos("Grupo A", teamList.splice(0,4));
const grupoB = new Grupos("Grupo B", teamList.splice(0,4));
const grupoC = new Grupos("Grupo C", teamList.splice(0,4));
const grupoD = new Grupos("Grupo D", teamList.splice(0,4));

const groups = [grupoA, grupoB, grupoC, grupoD];


// SIMULACIÓN DE PARTIDOS

function match(equipo1, equipo2) {
  let count1 = 0;
  let count2 = 0;
  let timmer = 0;

  const team1min = 0.68;
  const team1max = 0.8;
  const team2min = 0.8;
  const team2max = 0.92;

    while (timmer < 10) {
        const randomNum = Math.random();
        if (team1min < randomNum && randomNum < team1max) {
        count1++;
        } else if (team2min < randomNum && randomNum < team2max) {
        count2++;
        }
        timmer++;
    }

    while (count1 == count2) {
        const randomNum = Math.random();
        if (team1min < randomNum && randomNum < team1max) {
        count1++;
        } else if (team2min < randomNum && randomNum < team2max) {
        count2++;
        }
    }

    const winner = whoWins(equipo1, equipo2);
    function whoWins(equipo1, equipo2) {
        if (count1 > count2) {
        return equipo1;
        } else {
        return equipo2;
        }
    }

    console.log(`${equipo1} ${count1} - ${count2} ${equipo2} => ${winner} `);
    return count1, count2;
}

// MUESTRO LOS EQUIPOS EN CADA GRUPO


for (let group of groups) {
    console.log(`${group.name}: ${group.teams[0].name}, ${group.teams[1].name}`);
}

console.log();
console.log("===== CUARTOS DE FINAL =====");

match(grupoA.teams[0].name, grupoB.teams[1].name);
match(grupoB.teams[0].name, grupoA.teams[1].name);
match(grupoC.teams[0].name, grupoD.teams[1].name);
match(grupoD.teams[0].name, grupoC.teams[1].name);

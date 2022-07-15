console.log("====================================================");
console.log("=== COMIENZAN LAS FASES ELIMINATORIAS DEL TORNEO ===");
console.log("====================================================");
console.log();
console.log("Equipos que participan en el playoff:");
console.log();

// DECLARO GRUPOS COMO OBJETOS y los meto en un array

class Grupos {
  constructor(name, teams) {
    this.name = name;
    this.teams = teams;
  }
}

const grupoA = new Grupos("Grupo A", ["Noruega", "Inglaterra"]);
const grupoB = new Grupos("Grupo B", ["España", "Alemania"]);
const grupoC = new Grupos("Grupo C", ["Países Bajos", "Suiza"]);
const grupoD = new Grupos("Grupo D", ["Francia", "Islandia"]);

const groups = [grupoA, grupoB, grupoC, grupoD];


// SIMULACIÓN DE PARTIDOS

function match(equipo1, equipo2){
    let count1 = 0
    let count2 = 0
    let timmer=0
    while (timmer < 10){
        const randomNum = Math.random()
        if (0.65 < randomNum && randomNum < 0.8){
            count1++
        } else if (0.8 < randomNum && randomNum < 0.95) {
            count2++
        }         
        timmer ++
    }

    while (count1 == count2){
        const randomNum = Math.random()
        if (0.65 < randomNum && randomNum < 0.8){
            count1++
        } else if (0.8 < randomNum && randomNum < 0.95) {
            count2++
        }         
    }

    const winner = whoWins(equipo1, equipo2)
    function whoWins(equipo1, equipo2){
       
        if (count1 > count2){
            return equipo1
        } else {
            return equipo2
        }
    }

    console.log(`${equipo1} ${count1} - ${count2} ${equipo2} => ${winner} `)
    return count1, count2
}



// MUESTRO LOS EQUIPOS EN CADA GRUPO

for (group of groups) {
  console.log(`${group.name}: ${group.teams[0]}, ${group.teams[1]}`);
}


console.log();
console.log("===== CUARTOS DE FINAL =====");

match(grupoA.teams[0], grupoB.teams[1])
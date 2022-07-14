console.log('====================================================')
console.log('=== COMIENZAN LAS FASES ELIMINATORIAS DEL TORNEO ===')
console.log('====================================================')
console.log()
console.log('Equipos que participan en el playoff:')
console.log()

// DECLARO GRUPOS COMO OBJETOS y los meto en un array

const grupoA = {
    name: "Grupo A",
    teams: ['Noruega', 'Inglaterra'],
}

const grupoB = {
    name: "Grupo B",
    teams: ['España', 'Alemania']
}

const grupoC = {
    name: "Grupo C",
    teams: ['Países Bajos', 'Suiza']
}

const grupoD = {
    name: "Grupo D",
    teams: ['Francia', 'Islandia']
}

const groups = [grupoA, grupoB, grupoC, grupoD]


// MUESTRO LOS EQUIPOS EN CADA GRUPO

for (group of groups){
    console.log(`${group.name}: ${group.teams[0]}, ${group.teams[1]}`)
}

console.log()
console.log('===== CUARTOS DE FINAL =====')

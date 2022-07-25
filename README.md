# Práctica de Fundamentos de JS

Esta es la práctica del módulo de fundamentos de JS.

## Asignación aleatoria de equipos a los grupos

He creado un constructor de equipos, y tras crearlos los he metido en un array de 16 equipos, que se desordenan y se reparten 4 en cada grupo, de los cuales luego solo presento 2, que serán los que han llegado a cuartos.

## Simulación de partidos

Para ofrecer resultados más realistas, en lugar de utilizar simplemente valores aleatorios he optado por hacer una función basada en **contadores**. Generando un *número aleatorio 10 veces*, y haciendo que solo suba el marcador de uno u otro equipo si el número *entra en un rango* (si queda fuera, ningún equipo marca). Tras trastear un poco con los números llegué a unos resultados bastante realistas.

Para implementar la **restricción de empates** he añadido un *gol de oro*: si pasado el bucle ambos contadores son iguales, se repite el bucle hasta que sean diferentes.

La función retorna un objeto con las propiedades ``winner`` y ``loser`` que utilizo para seleccionar y preparar el siguiente partido.
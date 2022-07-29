# Práctica de Fundamentos de JS

Esta es la práctica del módulo de fundamentos de JS.

## Asignación aleatoria de equipos a los grupos

He creado un constructor de equipos, y tras crearlos los he metido en un array de 16 equipos, que se desordenan y se reparten 4 en cada grupo. Para los playoff se eligen solo **los 2 primeros** de cada grupo, que **se ordenan según la clasificación de la fase de grupos**.

## Simulación de partidos

Para ofrecer resultados más realistas, en lugar de utilizar simplemente valores aleatorios he optado por hacer una función basada en **contadores**. Generando un *número aleatorio 10 veces*, y haciendo que solo suba el marcador de uno u otro equipo si el número *entra en un rango* (si queda fuera, ningún equipo marca). Tras trastear un poco con los números llegué a unos resultados bastante realistas.

Al finalizar cada partido **se asignan a cada equipo los puntos** y los goles a favor y en contra según los resultados. Se muestra la tabla de resultados ordenada por puntos, diferencia de goles y alfabéticamente.

Para implementar la **restricción de empates** en los playoff he añadido un *gol de oro*: si pasado el bucle ambos contadores son iguales, se repite el bucle hasta que sean diferentes.

En los playoff la función retorna un objeto con las propiedades ``winner`` y ``loser`` que utilizo para seleccionar y preparar el siguiente partido.


## Problemas y dudas

Pongo aquí algunos de los problemas que más tiempo me ha tomado "resolver" (entrecomillado porque no lo he hecho de la manera más limpia o elegante...)

* En la función de simulación de partidos hay muchas pequeñas funciones que no he sabido "extraer" en funciones independientes para luego hacer callbacks. Como utilizan variables en común o una utiliza los resultados de otra, cada vez que intento sacarlas para intentar hacer el código más legible me falla por un lado o por otro.
El resultado son esas funciones larguísimas...

+ En la misma línea, la función de ordenar que utilizo por un lado para las tablas de las jornadas y por otro para la lista "principal" de grupos para que pasen correctamente a los playoffs no he sabido extraerla como una sola función que se adapte a cada uno de los dos contextos.

A ver si me puedes ayudar a ver qué es lo que no estoy entendiendo :)

¡Muchas gracias!
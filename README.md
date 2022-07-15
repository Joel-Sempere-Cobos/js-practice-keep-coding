# Práctica de Fundamentos de JS

Esta es la práctica del módulo de fundamentos de JS.

## Simulación de partidos

Para ofrecer resultados realistas, he optado por hacer una función basada en contadores. Generando un número aleatorio 10 veces, y haciendo que solo suba el marcador de uno u otro equipo si el número entra en un rango (si queda fuera, ningún equipo marca). Tras trastear un poco con los números llegué a unos resultados bastante realistas.

Para implementar la **restricción de empates** he añadido un "gol de oro": si pasado el bucle ambos contadores son iguales, se repite el bucle hasta que sean diferentes.
export function matchNoDraw(equipo1, equipo2) {
    let count1 = 0;
    let count2 = 0;
    let timmer = 0;

    function goalsGenerator() {
        const team1min = 0.62;
        const teamChange = 0.8;
        const team2max = 0.98;
        const randomNum = Math.random();
        if (team1min < randomNum && randomNum < teamChange) {
            count1++;
        } else if (teamChange < randomNum && randomNum < team2max) {
            count2++;
        }
    }

    while (timmer < 10) {
        goalsGenerator();
        timmer++;
    }

    while (count1 == count2) {
        goalsGenerator();
    }

    function whoWins(equipo1, equipo2) {
        if (count1 > count2) {
            return equipo1;
        } else {
            return equipo2;
        }
    }

    function whoLoses(equipo1, equipo2) {
        if (count1 < count2) {
            return equipo1;
        } else {
            return equipo2;
        }
    }

    const winner = whoWins(equipo1, equipo2);
    const loser = whoLoses(equipo1, equipo2);

    console.log(
        `${equipo1.name} ${count1} - ${count2} ${equipo2.name} => ${winner.name} `
    );

    return { winner, loser };
}
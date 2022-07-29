export class Leagues {
    constructor (name, teams, groups){
        this.name = name,
        this.teams = teams,
        this.groups = groups,
        this.matchDays = [
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
            }
        ]
    }
}
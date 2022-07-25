export class Team {
    
    constructor(name, config){
        this.name = name
        this.setup(config)
    }

    setup(config = {}) {
        const defaultConfig ={
            points: 0,
            goalsAgainst: 0,
            goals: 0,
            goalsDif: (this.goals - this.goalsAgainst)
        }
        this.config = Object.assign(defaultConfig, config)
    }
}
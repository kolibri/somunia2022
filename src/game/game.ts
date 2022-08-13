import { 
    StageInterface,
} from "./stage/index";

import { 
    GameStateInterface,
    GameState
} from "./state";




export class Game {
    readonly config: string = "dev"
    readonly stage: StageInterface
    readonly state: GameStateInterface

    constructor(config: string, stage: StageInterface) {
        this.config = config
        this.stage = stage
        this.state = new GameState()
    }

    init() {
        
        this.stage.init()
    }

    render() {
        this.stage.render(this.state)
    }

    run() {
        console.log('run')
        requestAnimationFrame(this.gameLoop)
    }

    gameLoop = () => {
        this.render()
        requestAnimationFrame(this.gameLoop)
    }
}
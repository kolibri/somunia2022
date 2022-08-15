import { 
    StageInterface,
} from "./stage/index";

import { 
    GameStateInterface,
    GameState
} from "./state";




export class Game {
    readonly stage: StageInterface
    readonly state: GameStateInterface
    readonly scenario: GameScenario

    constructor(stage: StageInterface) {
        this.stage = stage
        this.state = new GameState()
        this.scenario = new MapScenario()
    }

    init() {
        this.stage.init()
    }

    render(timestamp: string) {
        state = this.scenario.process(timestamp)
        this.stage.render(state)
    }

    private run() {
        console.log('run')
        requestAnimationFrame(this.gameLoop)
    }

    private gameLoop = (timestamp: string) => {
        this.render(timestamp: string)
        requestAnimationFrame(this.gameLoop)
    }
}

/**
 * scenario: what is displayed by the stage
 *   could be a map view, some dialog, menu interaction, battle, cut scene, etc.
 * 
 * Plan ist to have gameState changes here. 
 *   So Stage is render display only, and interactions handling is done here
 * ?:
 * where to place gameState. class deps or via argument?
 * controls? 
 * !:
 * staggered array queue: we render just the first scenario, end when it ends, we shift it and start rendering the new first, and so on
 * 
 * Map
 * Menu
 * Battle
 * CutScene
 * 
 * 
 */
interface GameScenario {
    public process(timestamp: string): GameStateInterface
}

class MapScenario {
    public process(timestamp: string) {

    }
}
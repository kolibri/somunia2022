"use strict"

import { 
	StageInterface,
	Stage,
	CanvasStage,
	HudStage,
	DebugStage 
} from "./game/stage";

import { 
	GameStateInterface,
	GameState
} from "./game/state";




class Game {
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



const mainElement = document.getElementById('game')

const game = new Game('dev', new Stage([
	new CanvasStage(mainElement),
	new HudStage(mainElement),
	new DebugStage(mainElement)
]))	

game.init()
game.run()
"use strict"

import { 
	Stage,
	CanvasStage,
	HudStage,
	DebugStage 
} from "./game/stage";

import { 
	GameStateInterface,
	GameState
} from "./game/state";

import { 
	Game
} from "./game/game";


const mainElement = document.getElementById('game')

const game = new Game('dev', new Stage([
	new CanvasStage(mainElement),
	new HudStage(mainElement),
	new DebugStage(mainElement)
]))	

game.init()
game.run()

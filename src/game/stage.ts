"use strict"


import { GameStateInterface } from "./state";


function createElement(type: string, options: any ) {
    const element = document.createElement(type)
    if (!options) {
    	return element
    }
        if (options['attributes'] !== undefined) {
            for (let name in options.attributes) {
                element.setAttribute(name, options.attributes[name])
            }
        }
        if (options['classes'] !== undefined) {
            for (let c of options.classes) {
                element.classList.add(c);
            }
        }
        if (options['id'] !== undefined) {
            element.id = options.id
        }
        if (options['txt'] !== undefined) {
            element.appendChild(document.createTextNode(options.txt))
        }
        if (options['dataset'] !== undefined) {
            for (let d in options.dataset) {
                element.dataset[d] = options.dataset[d]
            }
        }
        if (options['click'] !== undefined) {
            element.addEventListener('click', options.click)
        }
        if (options['children'] !== undefined) {
            for (let child of options.children) {
                element.appendChild(child)
            }
        }

    return element
}


export interface StageInterface {
	init(): void
	render(state: GameStateInterface): void
}

export class Stage implements StageInterface {
	readonly stages: StageInterface[]

	constructor(stages: StageInterface[]) {
		this.stages = stages;
	}

	init() {
		for (let stage of this.stages){
			stage.init()
		}
	}
	render(state: GameStateInterface) {
		for (let stage of this.stages){
			stage.render(state)
		}
	}

}

export class CanvasStage implements StageInterface{
	readonly main: HTMLElement

	constructor(main: HTMLElement) {
		this.main = main;
	}

	init() {
		const canvas = createElement("canvas", {})
		this.main.appendChild(canvas)
	}

	render(state: GameStateInterface) {

	}
}

export class HudStage implements StageInterface{
	readonly main: HTMLElement

	constructor(main: HTMLElement) {
		this.main = main;
	}

	init() {
		const hud = createElement("div", {'id': 'hud'})
		this.main.appendChild(hud)
	}

	render(state: GameStateInterface) {

	}
}

export class DebugStage implements StageInterface{
	readonly main: HTMLElement
	private count: HTMLElement
	private d: number = 0

	constructor(main: HTMLElement) {
		this.main = main;
	}

	init() {
		const debug = createElement("div", {'id': 'debug'})
		this.count = createElement("div", {'id': 'count'})
		debug.appendChild(this.count)
		this.main.appendChild(debug)
	}

	render(state: GameStateInterface) {
		this.count.textContent = this.d.toString()
	}
}
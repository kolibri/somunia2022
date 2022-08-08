"use strict"

export interface GameStateInterface {
	get(key: string): any;
	set(key: string, value: any): any;
}

export class GameState implements GameStateInterface {
	get(key: string) {}
	set(key: string, value: any){}
}

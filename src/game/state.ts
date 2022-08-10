"use strict"

export interface GameStateInterface {
    get(key: string): any;
    set(key: string, value: any): any;
}

export class GameState implements GameStateInterface {
    state: {[key: string]: any} = {}
    get(key: string) {
        if (!(key in this.state)) {
            return // @todo: throw error
        }

        return this.state[key]
    }
    set(key: string, value: any){
        this.state[key] = value
    }
}

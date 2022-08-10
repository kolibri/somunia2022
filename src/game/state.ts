"use strict"

export interface GameStateInterface {
    get(key: string): any;
    set(key: string, value: any): any;
}

export class GameState implements GameStateInterface {
    state: {[key: string]: any} = {}
    get(key: string) {
        if (!(key in this.state)) {
            throw new GameStateNotFoundError(key)
        }

        return this.state[key]
    }
    set(key: string, value: any){
        this.state[key] = value
    }
}

export class GameStateNotFoundError extends Error {
    constructor(key: string) {
        super('There is no state value "' + key + '"')
        Object.setPrototypeOf(this, GameStateNotFoundError.prototype);

    }
}
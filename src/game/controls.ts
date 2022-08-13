"use strict"

const keymaps = {
    up: ['', 'w']
    right: ['', 'd']
    down: ['', 's']
    left: ['', 'a']
}


export class Controls {
    
    up: Key = new Key([])
    right: Key = new Key([])
    down: Key = new Key([])
    left: Key = new Key([])

    confirm: Key = new Key([])
    cancel: Key = new Key([])
    menu: Key = new Key([])
    //: Key = new Key([])
    
    pause: Key = new Key([])
    pause: Key = new Key([])

    //: Key = new Key([])
    //: Key = new Key([])
    //: Key = new Key([])
    //: Key = new Key([])



    isKeyPressed(key: string, value: any){
        this.state[key] = value
    }
}

function init_listener(){
    addEventListener('keydown', (event) => {
        event.keyCode
    })


}


/*export class GameStateNotFoundError extends Error {
    constructor(key: string) {
        super('There is no state value "' + key + '"')
        Object.setPrototypeOf(this, GameStateNotFoundError.prototype);

    }
}*/


export class Key {
   keymap: string[] = []

   isPressed(): bool {

   }
}


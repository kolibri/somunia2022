"use strict"

const keymaps = {
    up: ['', 'w']
    right: ['', 'd']
    down: ['', 's']
    left: ['', 'a']
}


export class Controls {
    keys: Key[]
    constructor(keymap){
        this.keys = keymap.map(function (keysCodes) {
            return new Key(keysCodes)
        })

    }

    listen(event, keycode){
        for (key of this.keys) {
            key.listen(keycode)
        }
    }

}


const controls = new Controls(keymaps)


function init_listener(){
    addEventListener('keydown', (event) => {
        console.log('keydown event.keycode: ', event.keyCode)
        controls.listen('press', event.keyCode)
    })
    addEventListener('keyup', (event) => {
        console.log('keyup event.keycode', event.keyCode)
        controls.listen('release', event.keyCode)
    })
}



export class Key {
    keyCodes: string[] = []
    state: string
    constructor(keyCodes) {
        this.keyCodes = keyCodes
        this.state = 'released'
    }

    listen(event, keycode){
        if (!this.keyCodes.include(keycode)) {
            return
        }

        if ('press' == event) {
            this.state = 'pressed'
        }
        if ('release' == event) {
            this.state = 'released'
        }

    }

    isPressed(): bool {
        return this.state === 'pressed'
    }
    isReleased(): bool {
        return this.state === 'released'
    }
}


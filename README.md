# somunia2022 typescript approach


```
yarn jest
yarn serve
```

# What bothers me

## Typescript setup

- relative includes are kinda weird
- ts is kinda descriptive and verbose?
- dependency injection seems no thing in ts/nodejs world?
- how to mock properly?
- get in mind, everything is an object.
- what are types for? Aren't they just fancy interfaces?


## architecture

- the old "keystrokes are events, but I did not plan a event driven thing"
    - How to react only at certain times at things, that can happen everytime?
    - Should keystrokes be queued?
    - 'press' vs 'release'
        press: when running and button is hold
        release: with menus, holding button should not trigger next action
    - Where to react to controls
        - render probably
    - How to react to controls
        - 
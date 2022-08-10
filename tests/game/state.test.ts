// import { GameStateInterface } from "./state";
import { GameState } from '../../src/game/state'
 
describe('game state works', () => {
  test('can add and get value', () => {
    let gameState = new GameState()
    gameState.set('test', 'someValue')
    expect(gameState.get('test')).toBe('someValue');
  });
});
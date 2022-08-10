/** not implemented yet
import { GameState, GameStateNotFoundError } from '../../src/game/state'

describe('stage testing', () => {
  test('can add and get value', () => {
    let gameState = new GameState()
    gameState.set('test', 'someValue')
    expect(gameState.get('test')).toBe('someValue');
  });

  test("error on getting inexistend key", () => {
   let gameState = new GameState()
   expect(() => {gameState.get('test')}).toThrow(GameStateNotFoundError)
 });
});


*/
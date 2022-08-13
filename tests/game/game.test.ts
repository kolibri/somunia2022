import { StageInterface } from '../../src/game/stage'
import { GameStateInterface } from '../../src/game/state'
import { Game } from '../../src/game/game';

class StageMock implements StageInterface {
  init() {}
  render(state: GameStateInterface){}
}

describe('game works', () => {

  test('game inits its stage', () => {
    const mock = new StageMock()
    const init_spy = jest.spyOn(mock, 'init');
    const game = new Game('', mock)
    game.init()
    expect(init_spy).toHaveBeenCalled();

    expect(true).toBe(true);
  });
});





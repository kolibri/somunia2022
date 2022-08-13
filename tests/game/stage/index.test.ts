import { Stage, StageInterface } from '../../../src/game/stage/index'
import { GameStateInterface } from '../../../src/game/state'
import { Game } from '../../../src/game/game';

class StageMock implements StageInterface {
  init() {}
  render(state: GameStateInterface){}
}

class GameStateMock implements GameStateInterface {
    get(key: string){}
    set(key: string, value: any){}
}

describe('main stage works', () => {
  test('stage inits and renders all children', () => {
    const mock1 = new StageMock()
    const mock2 = new StageMock()
    const init_spy1 = jest.spyOn(mock1, 'init');
    const init_spy2 = jest.spyOn(mock2, 'init');
    const render_spy1 = jest.spyOn(mock1, 'render');
    const render_spy2 = jest.spyOn(mock2, 'render');
    const stage = new Stage([mock1, mock2])
    stage.init()
    expect(init_spy1).toHaveBeenCalled();
    expect(init_spy2).toHaveBeenCalled();
    stage.render(new GameStateMock())
    expect(render_spy1).toHaveBeenCalled();
    expect(render_spy2).toHaveBeenCalled();

  });
});

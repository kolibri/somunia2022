/*
import { Stage } from '../src/game/stage'
import { Game } from '../src/index';
import { mocked } from 'ts-jest/utils';

jest.mock('./index', () => {
  return {
    Stage: jest.fn().mockImplementation(() => {
      return {
        init: () => {},
        render: () => {},
      };
    })
  };
});

describe('Game testing', () => {
  const stageMock = mocked(Stage, true);

  beforeEach(() => {
   // Clears the record of calls to the mock constructor function and its methods
   stageMock.mockClear();

  });

  it('stuff', () => {
    const game = new Game('dev', stageMock)

    expect(stageMock.init).toHaveBeenCalledTimes(1);
    game.init()

  });

})


*/








import { Stage } from '../src/game/stage'
import { Game } from '../src/index';

//jest.mock('./Stage');

// here the whole Stage var is mocked deeply
const mockedStage = Stage as jest.Mocked<typeof Stage>;


describe('game state works', () => {

test('deep', () => {
  // there will be no TS error here, and you'll have completion in modern IDEs
  // mockedStage.a.b.c.hello('me');
  //const mockedStage = new Stage()

  const mockedStage = jest.spyOn(Stage, 'init');
  //mockedStage.init.mockReturnValueOnce({ data: expectedResult });

  const game = new Game('dev', mockedStage)

  expect(mockedStage.init.mock.calls).toHaveLength(1);


  expect(mockedStage.init).toHaveBeenCalled();


  game.init()
});

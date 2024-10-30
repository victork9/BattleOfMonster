import { postBattleData, setSelectedComputerMonster } from './monsters.actions.extended';
import { monstersReducerExtended } from './monsters.reducer.extended';
import monstersData from '../../../server/monsters.json';

describe('Monsters Reducer', () => {
  it('should return the initial state', () => {
    expect(monstersReducerExtended(undefined, { type: undefined })).toEqual({
      selectedComputerMonster: null,
      tie: false,
      winner: null,
    });
  });

  it('should change the battle on action fulfilled', () => {
    const action = {
      type: postBattleData.fulfilled,
      payload: {
        winner: monstersData.monsters[1],
        tie: false,
      },
    };
    const state = monstersReducerExtended(undefined, action);
    expect(state).toStrictEqual({
      selectedComputerMonster: null,
      tie: false,
      winner: {
        attack: 50,
        defense: 20,
        hp: 80,
        id: 'monster-2',
        imageUrl:
          'https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/old-shark.png',
        name: 'Old Shark',
        speed: 90,
        type: 'Type',
      },
    });
  });
  it('should change the battle on action pending', () => {
    const action = {
      type: postBattleData.pending,
    };
    const state = monstersReducerExtended(undefined, action);
    expect(state).toStrictEqual({
      selectedComputerMonster: null,
      tie: false,
      winner: null,
    });
  });
  it('should change the battle on action rejected', () => {
    const action = {
      type: postBattleData.rejected,
    };
    const state = monstersReducerExtended(undefined, action);
    expect(state).toStrictEqual({
      selectedComputerMonster: null,
      tie: false,
      winner: null,
    });
  });
  it('should setSelectedComputerMonster called', () => {
    const action = {
      type: setSelectedComputerMonster,
      payload: 'monster-1',
    };
    const state = monstersReducerExtended(undefined, action);
    expect(state).toStrictEqual({
      selectedComputerMonster: 'monster-1',
      tie: false,
      winner: null,
    });
  });
});

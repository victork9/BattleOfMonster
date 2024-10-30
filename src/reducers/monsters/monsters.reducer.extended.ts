import { createReducer } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { postBattleData, setSelectedComputerMonster } from './monsters.actions.extended';
interface MonsterState {
  selectedComputerMonster: Monster | null;
  winner: Monster | null;
  tie: boolean;
}

const initialState: MonsterState = {
  selectedComputerMonster: null,
  winner: null,
  tie: false,
};

export const monstersReducerExtended = createReducer(initialState, builder => {
  builder.addCase(postBattleData.pending, state => ({
    ...state,
    winner: null,
  }));

  builder.addCase(postBattleData.rejected, state => ({
    ...state,
    winner: null,
  }));

  builder.addCase(postBattleData.fulfilled, (state, action) => ({
    ...state,
    ...action.payload,
  }));

  builder.addCase(setSelectedComputerMonster, (state, action) => ({
    ...state,
    selectedComputerMonster: action.payload,
    winner: null,
  }));
});

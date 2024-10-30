import { RootState } from '../../app/store';

export const selectWinner = (state: RootState) => state.monstersBattle.winner;

export const selectSelectedComputerMonster = (state: RootState) =>
  state.monstersBattle.selectedComputerMonster;

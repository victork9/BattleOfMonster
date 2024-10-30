import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { MonsterBattleService } from './monsters.service.extended';
import { Monster } from '../../models/interfaces/monster.interface';

export const postBattleData = createAsyncThunk(
  'monsters/postBattleData',
  MonsterBattleService.battle,
);

export const setSelectedComputerMonster = createAction<Monster | null>(
  'monsters/setSelectedComputerMonster',
);

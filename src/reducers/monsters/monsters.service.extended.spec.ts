import { MonsterBattleService } from './monsters.service.extended';

const mockData = {
  winner: {
    id: 'monster-3',
    name: 'Red Dragon',
    attack: 90,
    defense: 80,
    hp: 90,
    speed: 70,
    type: 'Type',
    imageUrl:
      'https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/red-dragon.png',
  },
  tie: false,
};

describe('Monsters Service Extended', () => {
  it('should get the winner of the battle of monsters', async () => {
    jest.spyOn(MonsterBattleService, 'battle').mockResolvedValue(mockData);
    const response = await MonsterBattleService.battle({
      userMonsterId: 'monster-1',
      computerMonsterId: 'monster-4',
    });
    expect(response).toStrictEqual(mockData);
  });

  it('should get the message error when dont pass ids', async () => {
    jest
      .spyOn(MonsterBattleService, 'battle')
      .mockResolvedValue({ message: 'Missing ID' });
    const response = await MonsterBattleService.battle();
    expect(response).toEqual({ message: 'Missing ID' });
  });
  it('should get the message error when dont wrong id', async () => {
    jest
      .spyOn(MonsterBattleService, 'battle')
      .mockResolvedValue({ message: 'Invalid ID' });
    const response = await MonsterBattleService.battle({
      userMonsterId: 'monster-3',
      computerMonsterId: 'monster-4',
    });
    expect(response).toEqual({ message: 'Invalid ID' });
  });
});

import { API_URL } from '../../constants/env';
import { Monster } from '../../models/interfaces/monster.interface';

interface IData {
  userMonsterId?: string;
  computerMonsterId?: string;
}

const battle = async (
  params?: IData,
): Promise<{ winner: Monster; tie: boolean } | { message: string }> => {
  return await fetch(`${API_URL}/battle`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      monster1Id: params?.userMonsterId,
      monster2Id: params?.computerMonsterId,
    }),
  }).then(response => response.json());
};

export const MonsterBattleService = {
  battle,
};

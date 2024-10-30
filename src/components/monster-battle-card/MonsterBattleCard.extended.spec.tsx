import { render, screen } from '@testing-library/react-native';
import { MonsterBattleCard } from './MonsterBattleCard.extended';
import monstersData from '../../../server/monsters.json';
import { Monster } from '../../models/interfaces/monster.interface';

describe('MonsterBattleCard', () => {
  const monstersListFactory = (data: Monster | null, title: string) => {
    render(<MonsterBattleCard monster={data} title={title} />);
  };

  it('renders the monster card correctly with a monster', () => {
    monstersListFactory(monstersData.monsters[1], 'Player');

    expect(screen.getByText(/Old Shark/i)).toBeTruthy();
  });

  it('renders the card with a title when no monster is provided', () => {
    monstersListFactory(null, 'Player');
    expect(screen.getByText(/PLayer/i)).toBeTruthy();
  });
});

import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { Monster } from '../../models/interfaces/monster.interface';
import { setSelectedMonster } from '../../reducers/monsters/monsters.actions';
import {
  MonsterCardContainer,
  Img,
  ListTitle,
  MonsterCard,
  MonsterName,
  MonstersSection,
  containerScrollViewStyle,
} from './MonstersList.styled';
import { setSelectedComputerMonster } from '../../reducers/monsters/monsters.actions.extended';

type MonstersListProps = {
  monsters: Monster[];
};

const MonstersList: React.FC<MonstersListProps> = ({ monsters }) => {
  const dispatch = useAppDispatch();

  const [selectedMonsterId, setSelectedMonsterId] = useState<string | null>(null);

  function getRandomCumputerMonster(value: string | null) {
    if (!value) {
      dispatch(setSelectedComputerMonster(null));
      return;
    }
    const filtered = monsters.filter(({ id }) => id !== value);
    const randomIndex = Math.floor(Math.random() * filtered.length);

    dispatch(setSelectedComputerMonster(filtered[randomIndex]));

    return filtered[randomIndex];
  }

  const handleMonsterClick = (monster: Monster) => {
    const value = selectedMonsterId === monster.id ? null : monster.id;
    setSelectedMonsterId(value);
    dispatch(setSelectedMonster(!value ? null : monster));
    getRandomCumputerMonster(value);
  };

  return (
    <>
      <ListTitle>
        {monsters.length > 0 ? 'Select your monster' : 'No monsters available'}
      </ListTitle>

      <MonstersSection
        horizontal
        testID="monsters-list-section"
        contentContainerStyle={containerScrollViewStyle}>
        {monsters.map(monster => (
          <MonsterCardContainer
            testID="monsters-card"
            key={monster.id}
            onPress={() => handleMonsterClick(monster)}>
            <MonsterCard selected={monster.id === selectedMonsterId} testID={monster.id}>
              <Img source={{ uri: monster.imageUrl }} />
              <MonsterName>{monster.name}</MonsterName>
            </MonsterCard>
          </MonsterCardContainer>
        ))}
      </MonstersSection>
    </>
  );
};

export { MonstersList };

import { useEffect } from 'react';
import { TextStyle } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard.extended';
import { MonstersList } from '../../components/monsters-list/MonstersList.extended';
import { PageTitle } from '../../components/title/Title';
import { colors } from '../../constants/colors';
import { fetchMonstersData } from '../../reducers/monsters/monsters.actions';
import {
  selectMonsters,
  selectSelectedMonster,
} from '../../reducers/monsters/monsters.selectors';
import {
  PageContainer,
  BattleSection,
  StartBattleButton,
  StartButtonStyles,
  containerScrollViewStyle,
} from './BattleOfMonsters.extended.styled';
import {
  selectSelectedComputerMonster,
  selectWinner,
} from '../../reducers/monsters/monsters.selectors.extended';
import { postBattleData } from '../../reducers/monsters/monsters.actions.extended';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay.extended';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useAppSelector(selectMonsters);
  const selectedMonster = useAppSelector(selectSelectedMonster);
  const selectedCumputerMonster = useAppSelector(selectSelectedComputerMonster);
  const selectSelectedWinner = useAppSelector(selectWinner);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, []);

  const handleStartBattleClick = () => {
    dispatch(
      postBattleData({
        userMonsterId: selectedMonster?.id,
        computerMonsterId: selectedCumputerMonster?.id,
      }),
    );
  };

  return (
    <PageContainer>
      <PageTitle>Battle of Monsters</PageTitle>

      <MonstersList monsters={monsters} />

      <BattleSection horizontal contentContainerStyle={containerScrollViewStyle}>
        <MonsterBattleCard monster={selectedMonster} title="Player" />
        <MonsterBattleCard monster={selectedCumputerMonster} title="Computer" />
      </BattleSection>

      {selectSelectedWinner ? (
        <WinnerDisplay text={selectSelectedWinner?.name} />
      ) : (
        <StartBattleButton
          color={colors.white}
          dark={false}
          testID="start-battle-button"
          disabled={selectedMonster === null}
          labelStyle={StartButtonStyles as TextStyle}
          uppercase={false}
          onPress={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
      )}
    </PageContainer>
  );
};

export default BattleOfMonsters;

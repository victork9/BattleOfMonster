import React from 'react';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCard,
  BattleMonsterTitle,
  ContainerTitleCard,
  ImgCard,
  ProgressBar,
} from './MonsterBattleCard.extended.styled';
import { View } from 'react-native';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ monster, title }) => {
  const renderContentCard = () => {
    if (!monster) {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <BattleMonsterTitle fontSize="36px">{title}</BattleMonsterTitle>
        </View>
      );
    }
    return (
      <>
        <ImgCard source={{ uri: monster?.imageUrl }} />
        <ContainerTitleCard>
          <BattleMonsterTitle>{monster?.name}</BattleMonsterTitle>
        </ContainerTitleCard>
        <View style={{ marginBottom: 10 }}>
          <ProgressBar label="HP" value={monster.hp} />
          <ProgressBar label="Attack" value={monster.attack} />
          <ProgressBar label="Defense" value={monster.defense} />
          <ProgressBar label="Spped" value={monster.speed} />
        </View>
      </>
    );
  };

  return <BattleMonsterCard>{renderContentCard()}</BattleMonsterCard>;
};

export { MonsterBattleCard };

import styled from '@emotion/native';
import {
  Card,
  Title,
  ProgressBar as PaperProgressBar,
  ProgressBarProps,
} from 'react-native-paper';
import { colors } from '../../constants/colors';
import { Image, View } from 'react-native';

export const BattleMonsterCard = styled(Card)`
  padding: 10px;
  width: 252px;
  min-height: 341px;
  background: ${colors.white};
  border-radius: 7px;
  border: 0.5px solid #dddddd;
  flex-direction: column;
  display: flex;
  margin-right: 16px;
  margin-bottom: 16px;
  elevation: 5;
`;

export const BattleMonsterTitle = styled(Title)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: ${(props: { fontSize?: string }) => props.fontSize || '22px'};
  line-height: 42px;
`;

export const ProgressTitle = styled(Title)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: ${colors.black};
`;
export const ContainerTitleCard = styled(View)`
  border-bottom-width: 1px;
  border-bottom-color: #00000010;
`;

export const ImgCard = styled(Image)`
  border-radius: 7px;
  width: 100%;
  height: 148px;
`;

export const ProgressBar = styled(
  (props: Omit<ProgressBarProps, 'theme'> & { label: string; value: number }) => (
    <View>
      <ProgressTitle>{props.label}</ProgressTitle>
      <PaperProgressBar
        color={colors.progressColor}
        progress={props?.value / 100}
        {...props}
      />
    </View>
  ),
)`
  background-color: ${colors.progressBarBackground};
  border-radius: 4px;
  height: 7px;
`;

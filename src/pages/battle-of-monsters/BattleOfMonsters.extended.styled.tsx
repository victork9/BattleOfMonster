import styled from '@emotion/native';
import { ScrollView, TextStyle, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';
import { colors } from '../../constants/colors';

// Styled Components
export const PageContainer = styled(ScrollView)`
  display: flex;
  flex-direction: column;
  max-width: 820px;
  padding-bottom: 30px;
`;

export const BattleSection = styled(ScrollView)`
  padding-left: 20px;
  margin-top: 25px;
`;

interface ButtonProps {
  disabled: boolean;
}

export const StartBattleButton = styled(Button)`
  background-color: ${({ disabled }: ButtonProps) =>
    disabled ? colors.lightGreen : colors.darkGreen};
  border-radius: 5px;
  padding: 8px;
  margin: 0 20px 20px 20px;
  justify-content: flex-start;
`;

// Paper Styles
export const StartButtonStyles: TextStyle = {
  fontSize: 18,
  color: colors.white,
  fontFamily: 'Roboto',
  fontWeight: 'normal',
};

export const containerScrollViewStyle: ViewStyle = {
  paddingRight: 20,
};

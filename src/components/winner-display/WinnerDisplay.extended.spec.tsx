import { render, screen } from '@testing-library/react-native';
import { WinnerDisplay } from './WinnerDisplay.extended';

describe('WinnerDisplay', () => {
  const renderComponent = (text: string) => render(<WinnerDisplay text={text} />);
  it('renders the winner text correctly', () => {
    renderComponent('Dragon');
    expect(screen.getByTestId('winnerText').children.join(' ')).toBe('Dragon  wins!');
  });

  it('renders the default text when no winner text is provided', () => {
    renderComponent('');
    expect(screen.getByTestId('winnerText').children.join(' ')).toBe(' wins!');
  });
});

import { fireEvent, render, screen } from '@testing-library/react-native';
import BattleOfMonsters from './BattleOfMonsters.extended';
import monstersData from '../../../server/monsters.json';
import { useAppSelector } from '../../app/hooks';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

const mockDispatch = jest.fn();
jest.mock('../../app/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: jest.fn(),
}));

describe('BattleOfMonsters', () => {
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <BattleOfMonsters />
      </Provider>,
    );
  beforeEach(() => {
    jest.useFakeTimers();
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('should render the page container', async () => {
    (useAppSelector as jest.Mock).mockImplementation(callback =>
      callback({
        monsters: {
          monsters: monstersData.monsters,
          selectedMonster: null,
        },
        monstersBattle: {
          selectedComputerMonster: null,
        },
      }),
    );
    renderComponent();

    expect(mockDispatch).toHaveBeenCalled();
    // TODO - implement test
  });

  it('should enable the start battle button on choose a monster', async () => {
    (useAppSelector as jest.Mock).mockImplementation(callback =>
      callback({
        monsters: {
          monsters: monstersData.monsters,
          selectedMonster: monstersData.monsters[0],
        },
        monstersBattle: {
          selectedComputerMonster: null,
        },
      }),
    );

    renderComponent();
  });

  it('should start fight after click on button', async () => {
    (useAppSelector as jest.Mock).mockImplementation(callback =>
      callback({
        monsters: {
          monsters: monstersData.monsters,
          selectedMonster: monstersData.monsters[0],
        },
        monstersBattle: {
          selectedComputerMonster: monstersData.monsters[1],
          winner: null,
        },
      }),
    );
    renderComponent();

    fireEvent(screen.getByTestId('start-battle-button'), 'press');

    expect(mockDispatch).toBeCalled();
  });
  it('should render winner monster', async () => {
    (useAppSelector as jest.Mock).mockImplementation(callback =>
      callback({
        monsters: {
          monsters: monstersData.monsters,
          selectedMonster: monstersData.monsters[0],
        },
        monstersBattle: {
          selectedComputerMonster: monstersData.monsters[1],
          winner: monstersData.monsters[1],
        },
      }),
    );
    renderComponent();

    expect(screen.getByText(/Old Shark wins!/g)).toBeTruthy();
  });
});

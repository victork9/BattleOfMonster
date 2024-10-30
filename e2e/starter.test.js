import { by, device, element } from 'detox';

describe('Detox', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('1 Should show main screen and render monsters', async () => {
    await expect(element(by.text('Battle of Monsters'))).toBeVisible();
    await expect(element(by.text('Select your monster'))).toBeVisible();
    await expect(element(by.text('Dead Unicorn'))).toBeVisible();
    await expect(element(by.text('Player'))).toBeVisible();
    await expect(element(by.text('Start Battle'))).toBeVisible();

    await device.takeScreenshot('render_initial_screen');
  });

  it('2 Should be selected player and moster', async () => {
    const deadUnicornCard = element(by.text('Dead Unicorn'));

    await expect(element(by.text('Battle of Monsters'))).toBeVisible();
    await expect(element(by.text('Select your monster'))).toBeVisible();
    await expect(deadUnicornCard).toBeVisible();
    await expect(element(by.text('Player'))).toBeVisible();

    await deadUnicornCard.tap();

    await expect(element(by.text('Player'))).not.toBeVisible();
    await expect(element(by.text('HP')).atIndex(0)).toBeVisible();
    await expect(element(by.text('Attack')).atIndex(0)).toBeVisible();
    await expect(element(by.text('Defense')).atIndex(0)).toBeVisible();
    await expect(element(by.text('Speed')).atIndex(0)).toBeVisible();

    await device.takeScreenshot('user_selected_dead_unicorn');
  });

  it('3 Should play and display a winner', async () => {
    const deadUnicornCard = element(by.text('Dead Unicorn'));
    const startBattleButton = element(by.text('Start Battle'));

    await expect(element(by.text('Battle of Monsters'))).toBeVisible();
    await expect(element(by.text('Select your monster'))).toBeVisible();
    await expect(deadUnicornCard).toBeVisible();
    await expect(element(by.text('Player'))).toBeVisible();
    await expect(startBattleButton).toBeVisible();

    await deadUnicornCard.tap();
    await startBattleButton.tap();

    const winnerTextComponent = element(by.id('winnerText'));
    const textContent = await winnerTextComponent.getAttributes();
    const winnerText = textContent.text;

    const regexPattern = /^[a-zA-Z\s]+ wins!$/;
    const isMatching = regexPattern.test(winnerText);

    if (!isMatching) {
      throw new Error(`Text does not match the pattern: ${winnerText}`);
    }

    await device.takeScreenshot('user_selected_dead_unicorn');
  });
});

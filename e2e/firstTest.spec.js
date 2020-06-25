/* eslint-disable no-undef */
describe('Detox Demo', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  after(async () => {
    await device.sendToHome();
  });

  it('should have header with  title Detox Demo', async () => {
    await expect(element(by.id('demo-header'))).toBeVisible();
    await expect(element(by.id('demo-header'))).toHaveText('Detox Demo');
  });

  it('should have and input element with title Input example', async () => {
    await expect(element(by.id('demo-input-title'))).toBeVisible();
    await expect(element(by.id('demo-input-title'))).toHaveText(
      'Input example',
    );
    await expect(element(by.id('demo-input'))).toBeVisible();
  });

  it('should have a button element with title  Button Example', async () => {
    await expect(element(by.id('demo-button-title'))).toBeVisible();
    await expect(element(by.id('demo-button-title'))).toHaveText(
      'Button Example',
    );
    await expect(element(by.id('demo-button'))).toBeVisible();
  });
  it('should displayed alert when tap on demo button', async () => {
    await element(by.id('demo-button')).tap();
    await expect(element(by.label('OK')).atIndex(0)).toBeVisible();
    await element(by.label('OK')).atIndex(0).tap();
  });
});

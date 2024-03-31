import { newE2EPage } from '@stencil/core/testing';

describe('led-treatment-plan-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<led-treatment-plan-app></led-treatment-plan-app>');

    const element = await page.find('led-treatment-plan-app');
    expect(element).toHaveClass('hydrated');
  });
});

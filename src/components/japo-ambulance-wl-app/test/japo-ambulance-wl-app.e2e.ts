import { newE2EPage } from '@stencil/core/testing';

describe('japo-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<japo-ambulance-wl-app></japo-ambulance-wl-app>');

    const element = await page.find('japo-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});

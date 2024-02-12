import { newE2EPage } from '@stencil/core/testing';

describe('japo-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<japo-ambulance-wl-list></japo-ambulance-wl-list>');

    const element = await page.find('japo-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});

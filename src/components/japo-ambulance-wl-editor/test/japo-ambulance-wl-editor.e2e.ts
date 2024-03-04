import { newE2EPage } from '@stencil/core/testing';

describe('japo-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<japo-ambulance-wl-editor></japo-ambulance-wl-editor>');

    const element = await page.find('japo-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});

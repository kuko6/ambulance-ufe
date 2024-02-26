import { newSpecPage } from '@stencil/core/testing';
import { JapoAmbulanceWlApp } from '../japo-ambulance-wl-app';

describe('japo-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JapoAmbulanceWlApp],
      html: `<japo-ambulance-wl-app></japo-ambulance-wl-app>`,
    });
    expect(page.root).toEqualHtml(`
      <japo-ambulance-wl-app>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </japo-ambulance-wl-app>
    `);
  });
});

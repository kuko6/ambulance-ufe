import { newSpecPage } from '@stencil/core/testing';
import { JapoAmbulanceWlList } from '../japo-ambulance-wl-list';

describe('japo-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JapoAmbulanceWlList],
      html: `<japo-ambulance-wl-list></japo-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <japo-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </japo-ambulance-wl-list>
    `);
  });
});

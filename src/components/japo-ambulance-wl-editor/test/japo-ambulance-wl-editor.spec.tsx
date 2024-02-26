import { newSpecPage } from '@stencil/core/testing';
import { JapoAmbulanceWlEditor } from '../japo-ambulance-wl-editor';

describe('japo-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JapoAmbulanceWlEditor],
      html: `<japo-ambulance-wl-editor></japo-ambulance-wl-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <japo-ambulance-wl-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </japo-ambulance-wl-editor>
    `);
  });
});

import { newSpecPage } from '@stencil/core/testing';
import { JapoAmbulanceWlApp } from '../japo-ambulance-wl-app';

describe('japo-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [JapoAmbulanceWlApp],
      html: `<japo-ambulance-wl-app base-path="/"></japo-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("japo-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [JapoAmbulanceWlApp],
      html: `<japo-ambulance-wl-app base-path="/ambulance-wl/"></japo-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("japo-ambulance-wl-list");
  });
});
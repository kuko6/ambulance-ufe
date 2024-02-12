import { newSpecPage } from '@stencil/core/testing';
import { JapoAmbulanceWlList } from '../japo-ambulance-wl-list';

describe('japo-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JapoAmbulanceWlList],
      html: `<japo-ambulance-wl-list></japo-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as JapoAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length
    
    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients); 
  });
});

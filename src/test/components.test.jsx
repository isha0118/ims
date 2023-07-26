import React from 'react';
import { expect } from 'chai';
import { mount, configure } from 'enzyme';
import { spy, mock, stub } from 'sinon';
import {MoreActions} from "../components/more-actions"
import Adapter from '@cfaester/enzyme-adapter-react-18';
configure({ adapter: new Adapter() });

describe('MoreActions', () => {
    const props = {
     rowData: {
       id: 2,
       productName: "test1",
       category: "test1",
       ppu: 56,
       quantity: 500,
       shelfNo: "u8",
       vendorLink: "test"
     },
     handleDeletion: spy(),
     handleUpdate: spy()
    };
   it('<MoreActions />', () => {
     const wrapper = mount(<MoreActions {...props} />);
     expect(wrapper.exists()).to.equal(true);
     const muiComponent = wrapper.find("MuiDialogRoot");
     expect(muiComponent.exists()).to.equal(true);
   });
   });
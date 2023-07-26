import React from 'react';
import { expect } from 'chai';
import { mount, configure } from 'enzyme';
import { spy, mock, stub } from 'sinon';
import {MoreActions} from "../components/more-actions"
import {columns} from '../constants';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import {updateTable} from "../helpers/utils";
configure({ adapter: new Adapter() });
describe('util functions', () => {
    const data = [{
      id: 1,
      productName: "test1",
      category: "test1",
      ppu: 56,
      quantity: 789,
      shelfNo: "u8",
      vendorLink: "test"
    },
    {
      id: 2,
      productName: "test1",
      category: "test1",
      ppu: 56,
      quantity: 789,
      shelfNo: "u8",
      vendorLink: "test"
    }]
    const value = {
      id: 2,
      productName: "test1",
      category: "test1",
      ppu: 56,
      quantity: 500,
      shelfNo: "u8",
      vendorLink: "test"
    }
  it('updateTable: should update data', () => {
    const res = updateTable(value, data);
    expect(res[1].quantity).to.eql(500);
  });
});

import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('Item List actions', () => {
  it('addItem should add the item to the Add Items list', () => {
    expect(actions.addItem({
      id: 1,
      flavor: 'Chocolate',
      price: 0.75,
      inStock: 0,
      popularity: 'High'
    })).toEqual({
      type: c.ADD_ITEM,
      id: 1,
      flavor: 'Chocolate',
      price: 0.75,
      inStock: 0,
      popularity: 'High'
    });
  });

  it('removeItem should remove an item from Add Items list', () => {
    expect(actions.removeItem({
      id: 1,
      flavor: 'Chocolate',
      price: 0.75,
      inStock: 0,
      popularity: 'High'
    })).toEqual({
      type: c.REMOVE_ITEM,
      id: 1,
      flavor: 'Chocolate',
      price: 0.75,
      inStock: 0,
      popularity: 'High'
    });
  });

});
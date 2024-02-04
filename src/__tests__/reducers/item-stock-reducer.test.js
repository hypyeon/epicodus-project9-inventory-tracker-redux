import itemStockReducer from '../../reducers/item-stock-reducer';

describe('itemStockReducer', () => {
  let action;

  const itemData = {
    id: 1,
    flavor: 'Chocolate',
    price: 0.75, 
    inStock: 0, 
    popularity: "High"
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(itemStockReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add the amount of 130 per bucket to the inStock value', () => {
    const { id, flavor, price, inStock, popularity } = itemData;
    action = {
      type: 'ADD_BUCKET',
      id: id,
      flavor: flavor,
      price: price, 
      inStock: inStock, 
      popularity: popularity
    };

    expect(itemStockReducer({}, action)).toEqual({
      id: id,
      flavor: flavor,
      price: price, 
      inStock: inStock + 130, 
      popularity: popularity
    });
  });

});
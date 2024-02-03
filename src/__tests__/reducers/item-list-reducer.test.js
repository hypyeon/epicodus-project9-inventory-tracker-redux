import itemListReducer from '../../reducers/item-list-reducer';

describe('itemListReducer', () => {

  let action;
  const itemData = {
    id: 1,
    flavor: 'Chocolate',
    price: 0.75, 
    inStock: 0, 
    popularity: "High"
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(itemListReducer([], { type: null })).toEqual([]);
  });

  test('Should successfully add new item data to itemToAddStock array', () => {
    const { id, flavor, price, inStock, popularity } = itemData;
    action = { 
      type: 'ADD_ITEM',
      id: id,
      flavor: flavor,
      price: price, 
      inStock: inStock, 
      popularity: popularity
    };

    expect(itemListReducer([], action)).toEqual([
      {
        id: id,
        flavor: flavor,
        price: price, 
        inStock: inStock, 
        popularity: popularity
      }
    ])
  })
});
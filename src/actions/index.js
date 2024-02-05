import * as c from '../actions/ActionTypes';

export const addItem = (item) => {
  const { id, flavor, price, inStock, popularity } = item;
  return {
    type: c.ADD_ITEM,
    id: id,
    flavor: flavor,
    price: price,
    inStock: inStock,
    popularity: popularity
  }
};

export const removeItem = (item) => {
  const { id, flavor, price, inStock, popularity } = item;
  return {
    type: c.REMOVE_ITEM,
    id: id,
    flavor: flavor,
    price: price,
    inStock: inStock,
    popularity: popularity
  }
};
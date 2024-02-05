import * as c from './../actions/ActionTypes';

const reducer = (state = [], action) => {
  const { id, flavor, price, inStock, popularity } = action;

  switch (action.type) {
    case c.ADD_ITEM: 
      if (!state.some(item => item.id === id)) {
        return [
          ...state,
          {
            id: id,
            flavor: flavor,
            price: price,
            inStock: inStock,
            popularity: popularity
          }
        ];
      }
      return state;
    case c.REMOVE_ITEM:
      return state.filter(item => item.id !== id);

    default: 
      return state;
  }
};

export default reducer;
const reducer = (state = {}, action) => {
  const { id, flavor, price, inStock, popularity } = action;
  switch (action.type) {
    case 'ADD_BUCKET': 
      return Object.assign({}, state, {
        id: id,
        flavor: flavor,
        price: price,
        inStock: inStock + 130,
        popularity: popularity
      });
    case 'SELL_ITEM':
      return Object.assign({}, state, {
        id: id,
        flavor: flavor,
        price: price,
        inStock: inStock - 1,
        popularity: popularity
      });
    default: 
      return state;
  }
};

export default reducer;
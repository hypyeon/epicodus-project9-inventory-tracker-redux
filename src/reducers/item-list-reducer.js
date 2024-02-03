const reducer = (state = [], action) => {
  const { id, flavor, price, inStock, popularity } = action;
  switch (action.type) {
    case 'ADD_ITEM': 
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
    default: 
      return state;
  }
};

export default reducer;
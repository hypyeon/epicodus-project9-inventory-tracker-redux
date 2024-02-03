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
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== id);
    default: 
      return state;
  }
};

export default reducer;
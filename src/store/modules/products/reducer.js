import * as types from '../types';

const initialState = {
  allProducts: [],
  productsFiltered: [],
  loading: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_PRODUCTS_REQUEST: {
      let newState = { ...state };
      newState.loading = true
      return newState;
    }
    
    case types.GET_PRODUCTS_SUCCESS: {
      let newState = { ...state };
      newState.allProducts = action.payload
      newState.loading = false
      return newState;
    }

    case types.GET_PRODUCTS_FAILURE: {
      return initialState;
    }

    case types.FILTER_PRODUCT: {
      let newState = { ...state }
      newState.productsFiltered = action.payload;
      return newState;
    }
  
    default:
      return state;
  }
}

export default reducer;
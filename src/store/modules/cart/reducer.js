import * as types from '../types';

const initialState = {
  cart: {
    products: [],
    orderAmount: 0,
    orderSubAmount: 0,
    orderItemsAmount: 0,
    orderShippingAmount: 0,
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_CART: {
      const newState = { ...state };

      const index = newState.cart.products.findIndex(item => item.product.id === action.payload.id);
      if (index >= 0) {
        newState.cart.products[index] = {
          product: action.payload,
          amount: newState.cart.products[index].amount + parseFloat(action.payload.price),
          quantity: newState.cart.products[index].quantity + parseFloat(action.payload.quantity)
        };
        newState.cart.orderSubAmount = newState.cart.orderSubAmount + action.payload.price;
        newState.cart.orderItemsAmount = newState.cart.orderItemsAmount + 1;
        newState.cart.orderShippingAmount = newState.cart.orderShippingAmount + 0;
        newState.cart.orderAmount = newState.cart.orderSubAmount + newState.cart.orderShippingAmount;
      } else {
        newState.cart = {
          products: [...newState.cart.products, {
            product: action.payload,
            amount: parseFloat(action.payload.price),
            quantity: parseFloat(action.payload.quantity)
          }],
          orderSubAmount: newState.cart.orderSubAmount + action.payload.price,
          orderItemsAmount: newState.cart.orderItemsAmount + 1,
          orderShippingAmount: newState.cart.orderShippingAmount + 0,
          orderAmount: (newState.cart.orderSubAmount + action.payload.price) + (newState.cart.orderShippingAmount + 0)
        }
      }
      
      return newState;
    }

    case types.REMOVE_PRODUCT_TO_CART: {
      let newState = { ...state };

      const _product = newState.cart.products.find(item => item.product.id === action.payload.product.id);
      const _productIndex = newState.cart.products.findIndex(item => item.product.id === action.payload.product.id);
      if (_product) {
        newState.cart.products.splice(_productIndex, 1);
        newState.cart.orderSubAmount = Number((newState.cart.orderSubAmount - _product.amount).toFixed(2));
        newState.cart.orderItemsAmount = newState.cart.orderItemsAmount - _product.quantity;
        newState.cart.orderShippingAmount = Number(newState.cart.orderShippingAmount.toFixed(2)) - 0;
        newState.cart.orderAmount = newState.cart.orderSubAmount + newState.cart.orderShippingAmount;
      }

      return newState;
    }

    case types.INCREASE_PRODUCT_QUANTITY: {
      let newState = { ...state };

      const index = newState.cart.products.findIndex(item => item.product.id === action.payload.product.id);
      if (index >= 0) {
        newState.cart.products[index] = {
          product: action.payload.product,
          amount: newState.cart.products[index].amount + parseFloat(action.payload.product.price),
          quantity: newState.cart.products[index].quantity + 1
        };
        newState.cart.orderSubAmount = Number((newState.cart.orderSubAmount + action.payload.product.price).toFixed(2));
        newState.cart.orderItemsAmount = newState.cart.orderItemsAmount + 1;
        newState.cart.orderShippingAmount = Number(newState.cart.orderShippingAmount.toFixed(2)) + 0;
        newState.cart.orderAmount = newState.cart.orderSubAmount + newState.cart.orderShippingAmount;
      }

      return newState;
    }
    
    case types.DECREASE_PRODUCT_QUANTITY: {
      let newState = { ...state };

      const index = newState.cart.products.findIndex(item => item.product.id === action.payload.product.id);
      if (index >= 0 && newState.cart.products[index].quantity > 1) {
        newState.cart.products[index] = {
          product: action.payload.product,
          amount: newState.cart.products[index].amount - parseFloat(action.payload.product.price),
          quantity: newState.cart.products[index].quantity - 1
        };
        newState.cart.orderSubAmount = Number((newState.cart.orderSubAmount - action.payload.product.price).toFixed(2));
        newState.cart.orderItemsAmount = newState.cart.orderItemsAmount - 1;
        newState.cart.orderShippingAmount = Number(newState.cart.orderShippingAmount.toFixed(2)) - 0;
        newState.cart.orderAmount = newState.cart.orderSubAmount + newState.cart.orderShippingAmount;
      }

      return newState;
    }

    case types.CLEAN_CART: {
      let newState = { ...state };

      newState.cart = {
        products: [],
        orderAmount: 0,
        orderSubAmount: 0,
        orderItemsAmount: 0,
        orderShippingAmount: 0,
      };

      return newState;
    }
  
    default:
      return state;
  }
}

export default reducer;
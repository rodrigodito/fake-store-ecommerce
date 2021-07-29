import * as types from '../types';

export function addProductToCart(payload) {
  return {
    type: types.ADD_PRODUCT_TO_CART,
    payload
  }
}

export function removeProductToCart(payload) {
  return {
    type: types.REMOVE_PRODUCT_TO_CART,
    payload
  }
}

export function increaseProductQuantity(payload) {
  return {
    type: types.INCREASE_PRODUCT_QUANTITY,
    payload
  };
};

export function decreaseProductQuantity(payload) {
  return {
    type: types.DECREASE_PRODUCT_QUANTITY,
    payload
  };
};

export function cleanCart() {
  return {
    type: types.CLEAN_CART
  };
};
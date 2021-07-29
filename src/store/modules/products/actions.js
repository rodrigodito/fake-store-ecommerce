import * as types from '../types';

export function getProductsRequest(payload) {
  return {
    type: types.GET_PRODUCTS_REQUEST,
    payload
  }
}

export function getProductSuccess(payload) {
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    payload
  }
}

export function getProductsFailure(payload) {
  return {
    type: types.GET_PRODUCTS_FAILURE,
    payload
  }
}

export function filterProducts(payload) {
  return {
    type: types.FILTER_PRODUCT,
    payload
  }
}
import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as productsActions from './actions'
import * as types from '../types';
import api from '../../../services/api';

function* productsRequest() {
  try {
    const response = yield call(api.get, '/products')
    yield put(productsActions.getProductSuccess( [...response.data] ));
  } catch {
    yield put(productsActions.getProductsFailure());
  }
}

export default all([
  takeLatest(types.GET_PRODUCTS_REQUEST, productsRequest)
]);
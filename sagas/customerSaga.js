// src/sagas/customerSaga.js
import { takeLatest, put, call } from 'redux-saga/effects';
import { addCustomer } from '../actions/customerActions';
import { fetchCustomers, createCustomer } from '../utils/api';

function* fetchCustomersAsync() {
  try {
    const customers = yield call(fetchCustomers);
    yield put({ type: 'FETCH_CUSTOMERS_SUCCESS', payload: customers });
  } catch (error) {
    yield put({ type: 'FETCH_CUSTOMERS_FAILURE', payload: error.message });
  }
}

function* addCustomerAsync(action) {
  try {
    const newCustomer = yield call(createCustomer, action.payload);
    yield put(addCustomer(newCustomer));
  } catch (error) {
    console.error('Error adding customer:', error);
    // Handle error
  }
}

export default function* customerSaga() {
  yield takeLatest('FETCH_CUSTOMERS_ASYNC', fetchCustomersAsync);
  yield takeLatest('ADD_CUSTOMER_ASYNC', addCustomerAsync); // Consolidate here
}

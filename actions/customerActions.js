// src/actions/customerActions.js
export const fetchCustomersAsync = () => ({ type: 'FETCH_CUSTOMERS_ASYNC' });
export const addCustomerAsync = (customerData) => ({ type: 'ADD_CUSTOMER_ASYNC', payload: customerData });
export const addCustomer = (customer) => ({ type: 'ADD_CUSTOMER', payload: customer });
export const fetchCustomersSuccess = (customers) => ({ type: 'FETCH_CUSTOMERS_SUCCESS', payload: customers });
export const fetchCustomersFailure = (error) => ({ type: 'FETCH_CUSTOMERS_FAILURE', payload: error });

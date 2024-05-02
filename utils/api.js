// src/utils/api.js
const BASE_URL = 'https://your-api-base-url.com';

export const fetchCustomers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/customers`);
    if (!response.ok) {
      throw new Error('Failed to fetch customers');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error;
  }
};

export const createCustomer = async (customerData) => {
  try {
    const response = await fetch(`${BASE_URL}/customers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerData),
    });
    if (!response.ok) {
      throw new Error('Failed to create customer');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating customer:', error);
    throw error;
  }
};

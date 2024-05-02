import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const CustomerDetailsScreen = ({ route }) => {
  const { customerId } = route.params;
  const customer = useSelector(state => state.customers.find(c => c.id === customerId));

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Customer Details</Text>
      <Text>Name: {customer.name}</Text>
      {/* Add more details here */}
    </View>
  );
};

export default CustomerDetailsScreen;

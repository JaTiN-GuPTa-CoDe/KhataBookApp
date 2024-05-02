import React from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addCustomer } from '../actions/customerActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleAddCustomer = () => {
    const newCustomer = { id: Math.random().toString(), name: 'John Doe' };
    dispatch(addCustomer(newCustomer));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Add Customer" onPress={handleAddCustomer} />
    </View>
  );
};

export default HomeScreen;

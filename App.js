import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from '@react-native-community/gesture-handler'; // Import GestureHandlerRootView
import HomeScreen from './screens/HomeScreen';
import CustomerDetailsScreen from './screens/CustomerDetailsScreen';
import store from './store/configureStore';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView> {/* GestureHandlerRootView wraps the entire app */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="CustomerDetails" component={CustomerDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;

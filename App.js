import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/loginScreen';

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="login" component={LoginScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

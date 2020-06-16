import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();
const RootScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode={false}> 
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootScreen;

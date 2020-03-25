
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SignIn from './src/pages/SignIn/SignIn';
import SignUp from './src/pages/SignUp/SignUp';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
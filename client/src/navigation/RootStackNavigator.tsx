import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AccessScreen from '../screens/AccessScreen';
import SignInScreen from '../screens/SignInScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AboutScreen from '../screens/AboutScreen';

const RootStack = createStackNavigator();

// Should be returning this Navigator if the user is not logged in
const RootStackNavigator: React.FC = () => (
  <RootStack.Navigator headerMode='none' initialRouteName='AccessScreen'>
    <RootStack.Screen name='Access' component={AccessScreen} />
    <RootStack.Screen name='SignIn' component={SignInScreen} />
    <RootStack.Screen name='Register' component={RegisterScreen} />
    <RootStack.Screen name='About' component={AboutScreen} />
  </RootStack.Navigator>
);

export default RootStackNavigator;

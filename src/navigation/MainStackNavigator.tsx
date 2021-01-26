import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import JournalScreen from '../screens/JournalScreen';
import ResourceScreen from '../screens/ResourceScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Ascent Mobile' }}
        />
        <Stack.Screen
          name='Journal'
          component={JournalScreen}
          options={{ title: 'Journal Screen' }}
        />
        <Stack.Screen
          name='Resources'
          component={ResourceScreen}
          options={{ title: 'Resources Screen' }}
        />
        <Stack.Screen
          name='About'
          component={AboutScreen}
          options={{ title: 'About Screen' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import JournalScreen from '../screens/JournalScreen';
import ResourceScreen from '../screens/ResourceScreen';

const Stack = createStackNavigator();

const MainStackNavigator: React.FC = () => {
  const { Navigator, Screen } = Stack;

  return (
    <NavigationContainer>
      <Navigator initialRouteName='Home'>
        <Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Ascent Mobile' }}
        />
        <Screen
          name='Journal'
          component={JournalScreen}
          options={{ title: 'Journal Screen' }}
        />
        <Screen
          name='Resources'
          component={ResourceScreen}
          options={{ title: 'Resources Screen' }}
        />
        <Screen
          name='About'
          component={AboutScreen}
          options={{ title: 'About Screen' }}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator;

//This was helpful:
//https://heartbeat.fritz.ai/getting-started-with-stack-navigator-using-react-navigation-5-in-react-native-and-expo-apps-4c516becaee1

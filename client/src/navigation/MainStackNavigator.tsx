import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../constants/Colors.json';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import JournalScreen from '../screens/JournalScreen';
import BreatheScreen from '../screens/BreatheScreen';
import ResourceScreen from '../screens/ResourceScreen';
import AccessScreen from '../screens/AccessScreen';

const Stack = createStackNavigator();

// DefaultTheme added to change global app background color
const navTheme = DefaultTheme;
navTheme.colors.background = Colors.primary;

const MainStackNavigator = () => {
  return (
    <NavigationContainer
      theme={navTheme}
    >
      {/* when we want to consider adding the logo to the header - https://stackoverflow.com/questions/44097144/react-navigation-use-image-in-header */}
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#395772'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name='Access'
          component={AccessScreen}
          options={{ title: 'Ascent Mobile' }}
        />
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
        <Stack.Screen
          name='Breathe'
          component={BreatheScreen}
          options={{ title: 'Breathe Screen' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator;

//This was helpful:
//https://heartbeat.fritz.ai/getting-started-with-stack-navigator-using-react-navigation-5-in-react-native-and-expo-apps-4c516becaee1

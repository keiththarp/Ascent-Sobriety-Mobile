import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import JournalScreen from '../screens/JournalScreen';
import ResourceScreen from '../screens/ResourceScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const MainStackNavigator: React.FC = () => {
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

export const TabNavigator: React.FC = () => {
  return (

  <NavigationContainer>
    <Tab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: 'grey',
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Ascent Mobile',
          tabBarLabel: 'Home'
        }}
        />
      <Tab.Screen
        name='Journal'
        component={JournalScreen}
        options={{
          title: 'Journal Screen',
          tabBarLabel: 'Journal'
        }}
      />
      <Tab.Screen
        name='Resources'
        component={ResourceScreen}
        options={{
          title: 'Resources Screen',
          tabBarLabel: 'Resources'
        }}
      />
      <Tab.Screen
        name='About'
        component={AboutScreen}
        options={{
          title: 'About Screen',
          tabBarLabel: 'About'
        }}
      />

    </Tab.Navigator>
  </NavigationContainer>
  );
}

// export default MainStackNavigator;
// export default TabNavigator;

//This was helpful:
//https://heartbeat.fritz.ai/getting-started-with-stack-navigator-using-react-navigation-5-in-react-native-and-expo-apps-4c516becaee1

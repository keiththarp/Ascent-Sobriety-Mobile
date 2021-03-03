import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import BreatheScreen from '../screens/BreatheScreen';
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
        <Screen
          name='Breathe'
          component={BreatheScreen}
          options={{ title: 'Breathe Screen' }}
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
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => {
              return <Entypo name="home" size={24} color="black" />
            }
          }}
        />
        <Tab.Screen
          name='Journal'
          component={JournalScreen}
          options={{
            title: 'Journal Screen',
            tabBarLabel: 'Journal',
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="journal" size={24} color="black" />
            }
          }}
        />
        <Tab.Screen
          name='Resources'
          component={ResourceScreen}
          options={{
            title: 'Resources Screen',
            tabBarLabel: 'Resources',
            tabBarIcon: ({ color, size }) => {
              return <MaterialCommunityIcons name="wrench" size={24} color="black" />
            }
          }}
        />
        <Tab.Screen
          name='About'
          component={AboutScreen}
          options={{
            title: 'About Screen',
            tabBarLabel: 'About',
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="information-circle-outline" size={24} color="black" />
            }
          }}
        />
        <Tab.Screen
          name='Breathe'
          component={BreatheScreen}
          options={{
            title: 'Breathe Screen',
            tabBarLabel: 'Breathe',
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="information-circle-outline" size={24} color="black" />
            }
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

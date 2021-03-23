import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import BottomTabNavigator from './src/navigation/TabNavigator';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import RootStackNavigator from './src/navigation/RootStackNavigator';
import Colors from './src/constants/Colors.json';


// DefaultTheme added to change global app background color
const navTheme = DefaultTheme;
navTheme.colors.background = Colors.primary;

export default function App() {
  return (
    <>
      <NavigationContainer theme={navTheme}>
        {/* <MainStackNavigator /> */}
        <BottomTabNavigator />
        {/* <RootStackNavigator /> */}
      </NavigationContainer>
    </>
  );
}

// For bottom navigation: https://aboutreact.com/react-native-bottom-navigation/
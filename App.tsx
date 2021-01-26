import 'react-native-gesture-handler';
import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MainStackNavigator from './src/navigation/MainStackNavigator';

// const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <MainStackNavigator />
  );
}

// For bottom navigation: https://aboutreact.com/react-native-bottom-navigation/
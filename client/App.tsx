import 'react-native-gesture-handler';
import React, { useState, useMemo } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import BottomTabNavigator from './src/navigation/TabNavigator';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import RootStackNavigator from './src/navigation/RootStackNavigator';
import Colors from './src/constants/Colors.json';

import { AuthContext } from './src/components/context';

// DefaultTheme added to change global app background color
const navTheme = DefaultTheme;
navTheme.colors.background = Colors.primary;

export default function App() {
  const [isLoding, setIsLoading] = useState(true);
  const [userToken, setuserToken] = useState(null);

  const authContext = useMemo(() => ({
    signIn: () => {
      setuserToken('abc');
      setIsLoading(false);
    },
    signOut: () => {
      setuserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setuserToken('abc');
      setIsLoading(false);
    }
  }));

  return (
    <>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={navTheme}>
          { userToken !== null ? <BottomTabNavigator /> : <RootStackNavigator />}
          {/* <MainStackNavigator /> */}
          {/* <BottomTabNavigator /> */}
          {/* <RootStackNavigator /> */}
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
}

// For bottom navigation: https://aboutreact.com/react-native-bottom-navigation/
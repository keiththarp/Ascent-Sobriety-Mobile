import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import BottomTabNavigator from './src/navigation/TabNavigator';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import RootStackNavigator from './src/navigation/RootStackNavigator';
import Colors from './src/constants/Colors.json';
import Canvas from './src/components/Canvas';



// DefaultTheme added to change global app background color
const navTheme = DefaultTheme;
navTheme.colors.background = Colors.primary;

export default function App() {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  if (isLoading) {
    return (
      <Canvas>
        <View style={styles.loadingAnimation}>
          <ActivityIndicator size="large" color={Colors.primaryBG} />
        </View>
      </Canvas>
    )
  }

  return (
    <NavigationContainer theme={navTheme}>
      {isLoggedIn ? (
        // If logged in show app pages
        <>
          <BottomTabNavigator />
        </>
      ) : (
        <>
          {/* // otherwise show login/register pages */}
          {/* <MainStackNavigator /> */}
          <RootStackNavigator />
        </>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingAnimation: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 150,
  }
});
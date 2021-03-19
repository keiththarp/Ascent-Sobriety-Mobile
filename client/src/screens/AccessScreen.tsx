import React from 'react';
import { StatusBar } from 'expo-status-bar';
//import AppLoading from 'expo-app-loading';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors.json';
import Canvas from '../components/Canvas';
import Card from '../components/Card';
import Logo from '../components/Logo';

import { RootNavigatorParamsList, TabNavigatorParamsList } from '../types'

interface AccessScreenProps {
  navigation: StackNavigationProp<RootNavigatorParamsList, 'Access'>
}

const AccessScreen: React.FC<AccessScreenProps> = ({ navigation }) => {
  return (
    <Canvas>
      <Logo />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <MaterialIcons
          name="info"
          style={styles.icon}
          size={24}
          color="white"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </Canvas>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  // screen: {
  //   fontSize: 30,
  //   fontWeight: 'bold',
  //   color: '#3A5775'
  // },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: Colors.primaryBG,
    borderRadius: 5,
    borderColor: Colors.primaryBorder,
    borderWidth: 1,
    padding: 9,
    margin: 9,
    minWidth: '40%',
    maxWidth: '50%',
  },
  buttonText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold'
  },
  icon: {
    marginTop: 10
  }
});

export default AccessScreen;
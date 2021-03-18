import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
//import AppLoading from 'expo-app-loading';
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors.json';
import Canvas from '../components/Canvas';
import Card from '../components/Card';
import Logo from '../components/Logo';

import { RootNavigatorParamsList, TabNavigatorParamsList } from '../types'

interface SignInScreenProps {
  navigation: StackNavigationProp<TabNavigatorParamsList, 'SignIn'>
}

const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Canvas>
      <Logo />
      <View style={styles.container}>
        <View style={styles.textInput}>
          <TextInput
            placeholder="email"
            onChangeText={email => setEmail(email)}
          />
        </View>
        <View style={styles.textInput}>
          <TextInput
            placeholder="password"
            onChangeText={pw => setPassword(pw)}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

      </View>
    </Canvas>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    width: 190,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    color: "rgba(131, 131, 131, 1)",
    fontFamily: 'Helvetica'
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: Colors.primaryBG,
    borderRadius: 5,
    borderColor: Colors.primaryBorder,
    borderWidth: 1,
    padding: 9,
    margin: 9,
    minWidth: '30%',
    maxWidth: '40%',
  },
  buttonText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold'
  },
});

export default SignInScreen;
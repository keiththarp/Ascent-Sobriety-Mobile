import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
//import AppLoading from 'expo-app-loading';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Animated, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import Colors from '../constants/Colors.json';
import Canvas from '../components/Canvas';
import Card from '../components/Card';
import Logo from '../components/Logo';

import { RootNavigatorParamsList, TabNavigatorParamsList } from '../types'
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface SignInScreenProps {
  navigation: StackNavigationProp<TabNavigatorParamsList, 'SignIn'>
}

const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> */}
        <Canvas>
          <Logo />
          <View style={styles.container}>
            <View style={styles.textInput}>
              <TextInput
                placeholder="email"
                autoCapitalize="none"
                onChangeText={email => setEmail(email)}
              />
            </View>
            <View style={styles.passwordInput}>
              <TextInput
                placeholder="password"
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={pw => setPassword(pw)}
              />
              <FontAwesome5 name="eye-slash" size={16} color="black" style={styles.eyeIcon}/>
            </View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('SignIn')}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </Canvas>

      {/* </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1
  },
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
  passwordInput: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 190,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    color: "rgba(131, 131, 131, 1)",
    fontFamily: 'Helvetica'
  },
  eyeIcon: {
    marginLeft:80
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
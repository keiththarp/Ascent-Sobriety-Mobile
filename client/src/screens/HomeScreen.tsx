import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootNavigatorParamsList, TopNavigatorParamsList } from '../types'
interface HomeScreenProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, 'Home'>
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  //const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ascent Sobriety</Text>
      <Text style={styles.mobile}>Mobile</Text>
      <View style={styles.hr} />
      <Text style={styles.screen}>Home Screen</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Journal')}
      >
        <Text style={styles.buttonText}>Go To Journal Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Resources')}
      >
        <Text style={styles.buttonText}>Go To Resources Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.buttonText}>Go To About Screen</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  mobile: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '100%',
    marginBottom: 15,
  },
  screen: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3A5775'
  },
  buttonContainer: {
    backgroundColor: 'rgba(58, 87, 117, 0.45)',
    borderRadius:5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#3A5775'
  }
});

export default HomeScreen;
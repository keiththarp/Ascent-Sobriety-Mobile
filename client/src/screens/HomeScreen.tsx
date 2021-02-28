import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import Canvas from '../components/Canvas'

const HomeScreen = (props) => {
  const { navigation } = props;
  return (
    <Canvas>
      <View style={styles.container}>

        <Text style={styles.title}>Hi there, Friend!</Text>
        <View style={styles.hr} />
        <Text style={styles.screen}>Check In Page</Text>
        <Text>How are you feeling today?</Text>

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
    </Canvas>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#395772'
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
    backgroundColor: 'rgba(58, 87, 117, 0.65)',
    borderRadius: 5,
    borderColor: 'rgba(58, 87, 117, .9)',
    borderWidth: 1,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default HomeScreen;
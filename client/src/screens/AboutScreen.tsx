import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ASCENT</Text>
      <Text style={styles.screen}>About US</Text>
      <View style={styles.hr} />
      <Text>Ascent is a sobriety tool built by people in recovery for people in recovery...</Text>
      <Text>By faciliating daily reflection,...</Text>
      <StatusBar style="auto" />
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
    fontFamily: 'Times New Roman',
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
  }
});

export default AboutScreen;
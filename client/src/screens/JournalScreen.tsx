import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Canvas from '../components/Canvas';

const JournalScreen = () => {
  return (
    <Canvas>
      <Card>
        <View style={styles.container}>
          <Text style={styles.title}>Ascent Sobriety</Text>
          <Text style={styles.mobile}>Mobile</Text>
          <View style={styles.hr} />
          <Text style={styles.screen}>Daily Reflections</Text>
          <StatusBar style="auto" />
        </View>
      </Card>
    </Canvas>
  )
};

const styles = StyleSheet.create({
  container: {
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
    color: 'white'
  }
});

export default JournalScreen;
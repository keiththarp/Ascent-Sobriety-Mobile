import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, StyleSheet } from 'react-native';

const JournalScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ascent Sobriety</Text>
      <Text style={styles.mobile}>Mobile</Text>
      <View style={styles.hr} />
      <Text style={styles.screen}>Daily Reflections</Text>
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

export default JournalScreen;
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import Colors from '../constants/Colors.json';
import Canvas from '../components/Canvas';
import Card from '../components/Card';
import { RootNavigatorParamsList, TabNavigatorParamsList } from '../types'
interface HomeScreenProps {
  navigation: StackNavigationProp<TabNavigatorParamsList, 'Home'>
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  //const { navigation } = props;
  return (
    <Canvas>
      <View style={styles.container}>

        <Text style={styles.title}>Hi there, Friend!</Text>
        <View style={styles.hr} />
        <Text style={styles.screen}>Check In Page</Text>
        <Card>
          <Text style={styles.bodyText}>How are you feeling today?</Text>
        </Card>

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
        {/* <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.buttonText}>Go To About Screen</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Breathe')}
        >
          <Text style={styles.buttonText}>Go To Breathe Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Access')}
        >
          <Text style={styles.buttonText}>Go To Access Screen</Text>
        </TouchableOpacity>
      </View>
    </Canvas>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#395772'
  },
  bodyText: {
    color: '#fff'
  },
  hr: {
    borderBottomWidth: 3,
    borderBottomColor: 'white',
    width: 100,
    marginBottom: 15,
  },
  screen: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3A5775'
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: Colors.primaryBG,
    borderRadius: 5,
    borderColor: Colors.primaryBorder,
    borderWidth: 1,
    padding: 10,
    margin: 20,
    minWidth: '85%',
    maxWidth: '85%',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default HomeScreen;
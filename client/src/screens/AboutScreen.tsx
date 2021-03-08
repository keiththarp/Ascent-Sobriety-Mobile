import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import Card from '../components/Card';
import Canvas from '../components/Canvas';

import { RootNavigatorParamsList, TabNavigatorParamsList } from '../types';
interface AboutScreenProps {
  navigation: StackNavigationProp<TabNavigatorParamsList, 'About'>
};

const AboutScreen: React.FC<AboutScreenProps> = ({ navigation }) => {
  return (
    <Canvas>
      <View style={styles.container}>
        <View style={styles.hr}>
          <Text style={styles.title}>About US</Text>
        </View>
        <Card>
          <Text style={styles.bodyText}>Ascent is a sobriety tool built by people in recovery for people in recovery. This
          application will not only help you track your daily mood and thoughts, but also help you track your
                    continuous and discontinuous time in sobriety.</Text>
          <Text style={styles.bodyText}>By facilitating daily reflection, Ascent creates space for each member to process
          and reflect on emotions rather than turning to substance misuse to mask or bury feelings. For each
          milestone of continuous sobriety, members are able to collect stars, tokens and more! Sign up today
                    to join in the fun.</Text>
        </Card>
        <StatusBar style="auto" />
      </View>
    </Canvas>
  )
};

const styles = StyleSheet.create({
  container: {

    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Times New Roman',
    fontSize: 32,
    fontWeight: 'bold',
  },
  bodyText: {
    color: 'white',
    fontSize: 16,
    paddingBottom: 15
  },
  mobile: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  hr: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    marginVertical: 15,
  },
  screen: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3A5775'
  }
});

export default AboutScreen;
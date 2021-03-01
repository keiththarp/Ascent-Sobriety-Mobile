import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import Card from '../components/Card';
import Canvas from '../components/Canvas';

const ResourceScreen = () => {
  return (
    <Canvas>
      <View style={styles.container}>
        <View style={styles.hr}>
          <Text style={styles.screen}>Popular Resources</Text>
        </View>
        <Card>
          <View style={styles.headingContainer}>
            <Text style={styles.h2}>
              Can Sobriety Be Both a Health Trend and a matter of Life or Death?
          </Text>
          </View>

          <Text style={styles.articleBody}>
            Article on current trends of sobriety
          </Text>
          <TouchableOpacity style={styles.learnButton} onPress={() => { }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Learn More</Text>
          </TouchableOpacity>
        </Card>
        <Card>
          <View style={styles.headingContainer}>
            <Text style={styles.h2}>
              Can Sobriety Be Both a Health Trend and a matter of Life or Death?
          </Text>
          </View>

          <Text style={styles.articleBody}>
            Article on current trends of sobriety
          </Text>
          <TouchableOpacity style={styles.learnButton} onPress={() => { }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Learn More</Text>
          </TouchableOpacity>
        </Card>
        <Card>
          <View style={styles.headingContainer}>
            <Text style={styles.h2}>
              Can Sobriety Be Both a Health Trend and a matter of Life or Death?
          </Text>
          </View>

          <Text style={styles.articleBody}>
            Article on current trends of sobriety
          </Text>
          <TouchableOpacity style={styles.learnButton} onPress={() => { }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Learn More</Text>
          </TouchableOpacity>
        </Card>
        <StatusBar style="auto" />
      </View>
    </Canvas>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  headingContainer: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    paddingBottom: 10,
    marginBottom: 15,
  },
  articleBody: {
    color: 'white'
  },
  hr: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    marginVertical: 15,
  },
  learnButton: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  screen: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3A5775',
  }
});

export default ResourceScreen;
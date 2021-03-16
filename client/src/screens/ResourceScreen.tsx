import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, TouchableOpacity, Linking, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';

import { API_URL } from '@env';

import Card from '../components/Card';
import Canvas from '../components/Canvas';

import Resources from '../utils/temp-data/resources.json';

const outsideURL = (url: string) => {
  Linking.openURL(url).catch((err) => console.log('An error occurred', err));

};

// Need to set types for the shape of this data once it's set up in the DB
const Resource = ({ title, introText, linkToResource }: any) => (
  <Card>
    <View style={styles.headingContainer}>
      <Text style={styles.h2}>
        {title}
      </Text>
    </View>
    <Text style={styles.articleBody}>
      {introText}
    </Text>
    <View>
      <TouchableOpacity style={styles.learnButton} onPress={() => { outsideURL(linkToResource) }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Learn More</Text>
      </TouchableOpacity>
    </View>
  </Card>
);

const ResourceScreen = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [resources, setResources] = useState([]);

  const getResources = async () => {
    const call = await fetch(`${API_URL}/api/resources`);
    const callResources = await call.json();
    setResources(callResources)
  }

  useEffect(() => {
    getResources();
  }, []);

  const renderResource = ({ item }: any) => (
    <Resource title={item.title} introText={item.introText} link={item.link} />
  );

  return (
    <Canvas>
      <SafeAreaView style={styles.container}>
        <View style={styles.hr}>
          <Text style={styles.screen}>Popular Resources</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            contentContainerStyle={styles.list}
            data={resources}
            renderItem={renderResource}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </Canvas>
  )
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: '85%'
  },
  list: {
    alignItems: 'center'
  },
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

/*
{Resources.map((item, index) => {
          return (
            <Card key={index}>
              <View style={styles.headingContainer}>
                <Text style={styles.h2}>
                  {item.title}
                </Text>
              </View>
              <Text style={styles.articleBody}>
                {item.introText}
              </Text>
              <TouchableOpacity style={styles.learnButton} onPress={() => { outsideURL(item.link) }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Learn More</Text>
              </TouchableOpacity>
            </Card>
          )
        })}
        */
import React from 'react';

import { SafeAreaView, ScrollView, View, Text, StatusBar, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text style={styles.title}>Ascent Sobriety</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#a9bedf',
    paddingTop: 35,
    paddingBottom: 35,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    color: '#000',
  },
});

export default Header;

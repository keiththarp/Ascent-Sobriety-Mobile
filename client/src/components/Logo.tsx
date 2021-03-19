import React from 'react';
import { StatusBar } from 'expo-status-bar';
//import AppLoading from 'expo-app-loading';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';


const Logo: React.FC = () => {
  // loading fonts is Async
  let [fontsLoaded] = useFonts({
    'Hoefler': require('../../assets/fonts/Hoefler_Text_Regular.ttf'),
  });

  // if the font hasn't loaded yet, return null, otherwise return the component
  if (!fontsLoaded) {
    // return <AppLoading />
    return null;
  } else {
    return (
      <>
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}
        />
        <View style={styles.container}>

          <Text style={styles.title}>ASCENT</Text>
          <Text style={styles.bodyText}>Sobriety Tool</Text>

          <StatusBar style="auto" />
        </View>
      </>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    height: 170,
    width: 170
  },
  title: {
    fontSize: 39,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Hoefler',
    marginTop: 27
  },
  bodyText: {
    color: '#cfeed5',
    fontFamily: 'Helvetica',
    fontSize: 20,
    marginBottom: 40
  },
});

export default Logo;
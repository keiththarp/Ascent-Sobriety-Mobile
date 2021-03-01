import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const Card: React.FC = (props) => {

  return (
    <View style={styles.cardContainer}>
      {props.children}
    </View>
  )
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(58, 87, 117, 0.65)',
    borderRadius: 5,
    borderColor: 'rgba(58, 87, 117, .9)',
    borderWidth: 1,
    width: 300,
    padding: 10,
    margin: 20,
  },
});

export default Card;
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
    minWidth: '85%',
    maxWidth: '85%',
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 20
  },
});

export default Card;
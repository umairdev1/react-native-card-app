import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const FlatCards = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.container}
      pagingEnabled={false}
      decelerationRate="fast">
      <View style={[styles.card, styles.cardOne]}>
        <Text style={styles.headingText}>Red</Text>
      </View>
      <View style={[styles.card, styles.cardTwo]}>
        <Text style={styles.headingText}>Green</Text>
      </View>
      <View style={[styles.card, styles.cardThree]}>
        <Text style={styles.headingText}>Blue</Text>
      </View>
      <View style={[styles.card, styles.cardFour]}>
        <Text style={styles.headingText}>Pink</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  headingText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 8,
    margin: 8,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
  cardFour: {
    backgroundColor: 'pink',
  },
});

export default FlatCards;

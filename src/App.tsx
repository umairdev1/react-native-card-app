import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import FlatCards from './components/FlatCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.container}>Hello World!</Text>
          <FlatCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 24,
    marginHorizontal: 20,
    marginVertical: 8,
    color: 'black',
    fontWeight: '500',
  },
});

export default App;

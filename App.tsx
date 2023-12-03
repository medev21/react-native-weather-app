// components
import CurrentWeather from './src/components/CurrentWeather';
import UpcomingWeather from './src/components/UpcomingWeather';
// dependencies
import React from 'react';
import {View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <UpcomingWeather />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;

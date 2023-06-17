import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <HomeScreen />
      </View>
    </Provider>
  );
};

export default App;
const styles = StyleSheet.create({});

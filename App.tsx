import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <View>
          <HomeScreen />
        </View>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
const styles = StyleSheet.create({});

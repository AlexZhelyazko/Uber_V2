import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Text> textInComponent!! </Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});

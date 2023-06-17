import React from 'react';
import {StyleSheet, View, SafeAreaView, Image} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style = {{padding: 5}}>
        <Image
          style={{width: 100, height: 100, resizeMode: 'contain'}}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({});

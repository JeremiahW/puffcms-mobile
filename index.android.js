/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import HomeContainer from './src/containers/home-container';
import store from './src/stores/index';
import AppWithNavigationState from './src/containers/app-navigator';



export default class PuffCMS extends Component {
  render() {
    return (
        <Provider store={store}>
          <View style={styles.container}>
              <AppWithNavigationState />
          </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#F5FCFF',
  },

});

AppRegistry.registerComponent('puffcms', () => PuffCMS);

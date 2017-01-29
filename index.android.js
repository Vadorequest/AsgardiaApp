/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import AppBootstrap from './src/shared/AppBootstrap';

export default class AsgardiaApp extends Component {
  render() {
    return (
      <AppBootstrap />
    )
  }
}

AppRegistry.registerComponent('AsgardiaApp', () => AsgardiaApp);

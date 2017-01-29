import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';

import TabView from './TabView';

export default class AppBootstrap extends Component {
  state = {
    pageHeight: Dimensions.get('window').height,
    pageWidth: Dimensions.get('window').width
  };

  _getNewDimensions = (event) => {
    this.setState({
      pageHeight: event.nativeEvent.layout.height,
      pageWidth: event.nativeEvent.layout.width
    })
  };

  render() {
    console.log('state', this.state)
    return (
      <View
        onLayout={this._getNewDimensions}
        style={{flex: 1}}
      >
        <TabView

          index={2}
          routes={[
            { key: '1', title: 'Home' },
            { key: '2', title: 'Concept' },
            { key: '3', title: 'Join' },
          ]}

        />
      </View>
    )
  }
}

import React, { Component } from 'react';

import TabView from './TabView';

export default class AppBootstrap extends Component {
  render() {
    return (
      <TabView
        index={0}
        routes={[
          { key: '1', title: 'Home' },
          { key: '2', title: 'Concept' },
          { key: '3', title: 'Join' },
        ]}
      />
    )
  }
}

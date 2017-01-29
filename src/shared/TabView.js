import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';

import HomeTab from './tabs/HomeTab';
import ConceptTab from './tabs/ConceptTab';
import JoinTab from './tabs/JoinTab';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab: {
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#3d3350',
  },
  footer: {
    textAlign: 'center',
  },
});

export default class TabView extends Component {
  state = {
    index: this.props.index,
    routes: this.props.routes,
  };

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBar style={styles.header} {...props} />;
  };

  _renderFooter = (props) => {
    return <Text style={styles.footer} {...props}>FAQ | Community | Privacy</Text>;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <HomeTab
        style={[ styles.page, styles.tab ]}
      />;
    case '2':
      return <ConceptTab
        style={[ styles.page, styles.tab ]}
      />;
    case '3':
      return <JoinTab
        style={[ styles.page, styles.tab ]}
      />;
    default:
      return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        renderFooter={this._renderFooter}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}

import React, { Component } from 'react';
import {
  Image, View, StyleSheet, Text,
  Dimensions, TouchableOpacity, Linking,
} from 'react-native';

const {height, width} = Dimensions.get('window');
const joinUrl = 'https://asgardia.space/en/join';
const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    height: height,
    width: width,
  },
  link: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 30,
  },
  explanation: {
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});


export default class JoinTab extends Component {
  _onPressLink() {
    Linking.canOpenURL(joinUrl).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + joinUrl);
      } else {
        return Linking.openURL(joinUrl);
      }
    }).catch(err => console.error('An error occurred', err));
  }

  render() {
    return (
      <View
        style={styles.view}
      >
        <Image
          source={require('./img/background.png')}
          style={styles.image}
        >
          <Text
            style={styles.explanation}
          >
            It is not yet possible to register through this application. {"\n"}
            But you can register on the official website. {"\n"}
          </Text>
          <TouchableOpacity
            onPress={this._onPressLink}
          >
            <Text
              style={styles.link}
            >
              Apply to Asgardia
            </Text>
          </TouchableOpacity>
        </Image>
      </View>
    )
  }
}

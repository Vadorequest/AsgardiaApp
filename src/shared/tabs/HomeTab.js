import React, { Component } from 'react';
import { Image, View, StyleSheet, Text, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  image: {
    height: height,
    width: width,
  }
});


export default class HomeTab extends Component {
  render() {
    return (
      <View>
        <Image
          source={require('./img/background.png')}
          style={styles.image}
        >
          <Text style={{color: 'white'}}>
            Home
          </Text>
        </Image>
      </View>
    )
  }
}

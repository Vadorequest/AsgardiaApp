import React, { Component } from 'react';
import { Image, View, StyleSheet, Text, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // remove width and height to override fixed static size
    width: null,
    height: null,
    backgroundColor: 'rgba(0,0,0,0)',
    // resizeMode: 'stretch',
  }
});


export default class HomeTab extends Component {
  render() {
    return (
        <Image
          source={require('./img/background.png')}
          style={styles.image}
          resizeMode={Image.resizeMode.stretch}
        >
          <ScrollView
            automaticallyAdjustContentInsets={false}
            onScroll={() => { console.log('onScroll!'); }}
            scrollEventThrottle={200}
          >
            <Text style={{color: 'white'}}>
              Home
            </Text>
            <Text style={{color: 'white'}}>
              Home
            </Text>
            <Text style={{color: 'white'}}>
              Home
            </Text>
            <Text style={{color: 'white'}}>
              Home
            </Text>
            <Text style={{color: 'white'}}>
              Home
            </Text>
            <Text style={{color: 'white'}}>
              Home
            </Text>
            <Text style={{color: 'white'}}>
              Home
            </Text>
            <Text style={{color: 'white'}}>
              Home
            </Text>
            <Text style={{color: 'white'}}>
              Home
            </Text>
            <Text style={{color: 'white'}}>
              Home
            </Text>
            <Text style={{color: 'purple'}}>
              Home
            </Text>
            <Text style={{color: 'white'}}>
              Home
            </Text>
            <Text style={{color: 'white'}}>
              Home
            </Text>
            <Text style={{color: 'white'}}>
              Home
            </Text>
            <Text style={{color: 'white'}}>
              Home
            </Text>
            <Text style={{color: 'white'}}>
              Home
            </Text>
            <Text style={{color: 'orange'}}>
              Home
            </Text>
            <Text style={{color: 'red'}}>
              Home
            </Text>
          </ScrollView>
        </Image>
    )
  }
}

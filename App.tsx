import React from 'react';
// prettier-ignore
import { StyleSheet, SafeAreaView, TouchableOpacity, TouchableHighlight, Text, View, TextInput, Alert, Button, Platform, Dimensions, ImageBackground, Image } from 'react-native';
import * as D from './src/data';
import Person from './src/screens/Person';
import { Colors } from 'react-native-paper';
import Color from 'color';

const avatarUrl = D.randomAvatarUrl();
const avatarSize = 50

console.log(Platform.OS)
const { width, height } = Dimensions.get('window');



export default function App() {

  return (
    <SafeAreaView style={[styles.flex]}>
      <ImageBackground
        style={[styles.flex, styles.imageBackground]}
        source={require('./src/assets/images/bg.jpg')}
      >
        <Image source={{uri: avatarUrl}} style={[styles.image]}/>
      </ImageBackground> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  imageBackground: {
    padding: 10
  },
  image: {
    width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2
  },
});

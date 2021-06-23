import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, TouchableHighlight, Text, TextInput, Alert, Button } from 'react-native';
import * as D from './src/data';
import Person from './src/screens/Person';


const people = D.makeArray(100).map(D.createRandomPerson)

const person = D.createRandomPerson();

export default function App() {

  const children = people.map((person) => (
    <Person key={person.id} person={person} />
  ))

  const onPress = () => Alert.alert('pressed.', 'message')

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Home" onPress={onPress} />
      <TouchableOpacity onPress={onPress}>
        <Text>Opacity</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={onPress}>
        <Text>Highlight</Text>
      </TouchableHighlight>
      <TextInput
        placeholder="enter your name"
        onChangeText={(text: string): void => console.log(text)}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onEndEditing={() => console.log('onEndEditing')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

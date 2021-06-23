import React, { Component } from 'react';
import { Text } from 'react-native';
import * as D from '../data';


const person = D.createRandomPerson();

class ClassComponent extends Component {
    render() {
        return (
            <Text>{JSON.stringify(person, null, 2)}</Text>
        );
    }
}

export default ClassComponent;
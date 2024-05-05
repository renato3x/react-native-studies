import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles from '../styles';
import { faker } from '@faker-js/faker';
import Number from './Number';

export default class Mega extends React.Component {
  state = {
    quantity: this.props.quantity,
    numbers: []
  };

  handleChangeQuantity(value) {
    this.setState({ quantity: +value });
  }

  generateNumbers() {
    const numbers = [];

    while (numbers.length != this.state.quantity) {
      const number = faker.number.int({ min: 1, max: 60 });

      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    numbers.sort((a, b) => a - b)
    this.setState({ numbers });
  }

  showNumbers() {
    return this.state.numbers.map((number, index) => {
      return <Number key={index} number={number}/>
    })
  }

  render() {
    return (
      <>
        <Text style={styles.text}>This a Class Component</Text>
        <Text style={styles.text}>{ this.state.quantity || 0 }</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Numbers quantity"
          value={`${this.state.quantity}`}
          onChangeText={value => this.handleChangeQuantity(value)}
          style={{
            borderBottomWidth: 1,
          }}
        />
        <Button
          title="Generate"
          onPress={() => this.generateNumbers()}
        />
        {
          this.state.numbers.length > 0 &&
          <View style={{
            padding: 30,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}>
            { this.showNumbers() }
          </View>
        }
      </>
    )
  }
}

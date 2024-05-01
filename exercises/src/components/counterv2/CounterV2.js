import { Text } from 'react-native';
import CounterV2Display from './CounterV2Display';
import styles from '../styles';
import CounterV2Actions from './CounterV2Actions';
import { useState } from 'react';

export default function CounterV2() {
  const [value, setValue]  = useState(0);

  function handleIncrement() {
    setValue(value + 1);
  }

  function handleDecrement() {
    setValue(value - 1);
  }

  return (
    <>
      <Text style={styles.text}>Counter</Text>
      <CounterV2Display value={value}/>
      <CounterV2Actions
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </>
  )
}

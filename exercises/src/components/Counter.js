import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import styles from './styles';

export default function Counter({ initial, step }) {
  const [ count, setCount ] = useState(initial || 0);

  function handleCounter(value) {
    setCount(value);
  }

  return (
    <>
      <Text style={styles.text}>{ count }</Text>
      <View style={style.buttonContainer}>
        <Button
          title="Sum"
          onPress={() => handleCounter(count + (step || 1))}
        />

        <Button
          title="Sub"
          color="red" onPress={() => handleCounter(count - (step || 1))}
        />
      </View>
    </>
  )
}

const style = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  }
})

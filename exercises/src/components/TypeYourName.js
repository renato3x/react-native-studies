import { useState } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';

/**
 * Componentes nao controlados são componentes que
 * não são gerenciados pelos estados da aplicação
 */

export default function TypeYourName() {
  const [ name, setName ] = useState('');

  return (
    <>
      <Text>{ name }</Text>
      <TextInput
        placeholder="Type your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    padding: 10,
    borderRadius: 10,
    minWidth: 200
  }
})

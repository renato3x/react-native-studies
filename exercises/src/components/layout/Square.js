import { StyleSheet, View } from 'react-native';

export default function Square({ color, size }) {
  return (
    <View 
      style={{
        height: size || 50,
        width: size || 50,
        backgroundColor: color || '#000'
      }}
    />
  )
}


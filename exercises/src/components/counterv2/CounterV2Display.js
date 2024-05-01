import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles';

export default function CounterV2Display({ value }) {
  return (
    <View style={style.display}>
      <Text style={[styles.text, style.displayText]}>{value}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  display: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
    width: 100
  },
  displayText: {
    color: '#fff',
    textAlign: 'center'
  }
});

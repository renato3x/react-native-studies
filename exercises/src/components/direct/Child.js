import { Text } from 'react-native';
import styles from '../styles';

export default function Child({ x, y }) {
  return (
    <>
      <Text style={styles.text}>{ x }, { y }</Text>
    </>
  )
}

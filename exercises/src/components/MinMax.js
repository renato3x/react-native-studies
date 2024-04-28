import { Text } from 'react-native';
import styles from './styles';

// Componente com parâmetros

export default function MinMax({ min, max }) {
  return (
    <Text style={styles.text}>
      The value { max } is greater than value { min }
    </Text>
  );
}

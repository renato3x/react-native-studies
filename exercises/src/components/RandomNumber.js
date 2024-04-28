import { Text } from "react-native";
import { faker } from '@faker-js/faker';
import styles from './styles';

export default function RandomNumber({ min, max }) {
  return (
    <Text style={styles.text}>
      { faker.number.int({ min, max }) }
    </Text>
  )
}

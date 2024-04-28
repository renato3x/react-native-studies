import { Text } from 'react-native';
import styles from './styles';

export default function Fragment({ title, subtitle }) {
  /**
   * Quando não usamos uma view para encapsular os os elementos do componente,
   * usamos o fragment (<React.Fragment/>/ <Fragment/> / <></>)
   * para encapsulá-los e conseguir envolver todo os elementos do componente,
   */
  return (
    <>
      <Text style={styles.text}>{ title }</Text>
      <Text>{ subtitle }</Text>
    </>
  );
}

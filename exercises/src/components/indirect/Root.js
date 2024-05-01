import { useState } from 'react';
import { Text } from 'react-native';
import Child from './Child';
import styles from '../styles';

/**
 * 
 * Trabalhando com eventos no react native
 */

export default function Root() {
  const [value, setValue] = useState(0);

  function showValue(value) {
    setValue(value);
  }

  return (
    <>
      <Text style={styles.text}>{ value }</Text>
      <Child 
        min={13}
        max={100}
        onShowValue={showValue}
      />
    </>
  )
}

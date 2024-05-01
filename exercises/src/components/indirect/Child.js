import { Button, Text } from 'react-native';
import { faker } from '@faker-js/faker';

export default function Child({ min, max, onShowValue }) {
  function generateNumber(min, max) {
    const value = faker.number.int({ min, max });
    onShowValue(value);
  }

  return (
    <>
      <Button
        title="Execute"
        onPress={() => generateNumber(min, max)}
      />
    </>
  )
}

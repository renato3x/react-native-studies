import { faker } from '@faker-js/faker';
import { StyleSheet, View } from 'react-native';
import Square from './Square';

export default function FlexBoxV1() {
  return (
    <View style={style.flexV1}>
      { new Array(5).fill().map(() => <Square color={faker.color.rgb()}/>) }
    </View>
  )
}

const style = StyleSheet.create({
  flexV1: {
    backgroundColor: '#000',
    flexGrow: 1,
    justifyContent: 'space-between',
  }
})

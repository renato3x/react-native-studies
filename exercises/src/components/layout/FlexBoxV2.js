import { faker } from '@faker-js/faker';
import { StyleSheet, View } from 'react-native';
import Square from './Square';

export default function FlexBoxV2() {
  return (
    <View style={style.flexV2}>
      { new Array(5).fill('').map((_, index) => <Square key={index} color={faker.color.rgb()}/>) }
    </View>
  )
}

const style = StyleSheet.create({
  flexV2: {
    width: '100%',
    backgroundColor: '#000',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1
  }
})

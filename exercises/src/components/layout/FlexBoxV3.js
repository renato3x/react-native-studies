import { faker } from '@faker-js/faker';
import { StyleSheet, View } from 'react-native';
import Square from './Square';

export default function FlexBoxV3() {
  return (
    <View style={style.flexV3}>
      {
        new Array(5).fill('')
        .map((_, index) => {
          return <Square key={index} color={faker.color.rgb()} size={(index + 2) * 10}/>
        })
      }
    </View>
  )
}

const style = StyleSheet.create({
  flexV3: {
    height: 350,
    width: '100%',
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  }
})

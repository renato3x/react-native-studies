import { faker } from '@faker-js/faker';
import { StyleSheet, View } from 'react-native';
import Square from './Square';

export default function FlexBoxV4() {
  return (
    <View style={style.flexV4}>
      <View style={style.v0}/>
      <View style={style.v1}/>
      <View style={style.v2}/>
    </View>
  )
}

const style = StyleSheet.create({
  flexV4: {
    width: 100,
    backgroundColor: '#000',
    flexGrow: 1
  },
  v0: {
    backgroundColor: '#abcdef ',
    height: 300,
  },
  v1: {
    backgroundColor: '#7159c1',
    flexGrow: 9,
  },
  v2: {
    backgroundColor: '#e3a900',
    flexGrow: 1,
  }
})

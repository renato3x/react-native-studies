import { StyleSheet, Text, View } from "react-native";

export default function Number({ number }) {
  return (
    <View style={style.container}>
      <Text style={style.number}>{ number }</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: '#000',
    margin: 5,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  number: {
    color: '#fff',
    fontSize: 24
  }
});

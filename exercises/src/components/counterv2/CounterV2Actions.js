import { Button, StyleSheet, View } from "react-native";

export default function CounterV2Actions({ onIncrement, onDecrement }) {
  return (
    <View style={style.container}>
      <Button
        title="+"
        onPress={onIncrement}
      />
      <Button
        title="-"
        onPress={onDecrement}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10
  }
});

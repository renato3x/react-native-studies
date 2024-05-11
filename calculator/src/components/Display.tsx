import { StyleSheet, Text, View } from "react-native";

interface DisplayProps {
  value: string;
}

export default function Display(props: Partial<DisplayProps>) {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue} numberOfLines={1}>{ props.value }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#181a1b',
    alignItems: 'flex-end'
  },
  displayValue: {
    fontSize: 60,
    color: '#fff'
  }
});

import { Text } from "react-native";

export default function Child({ name, lastName }) {
  return (
    <Text>
      { name } { lastName }
    </Text>
  )
}

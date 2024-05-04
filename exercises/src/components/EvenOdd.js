import { Text } from "react-native";

export default function EvenOdd({ number = 0 }) {
  return (
    <>
      { number % 2 === 0 ? <Text>Even</Text> : <Text>Odd</Text> }
    </>
  );
}

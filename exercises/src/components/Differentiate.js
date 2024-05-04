import { Platform, Text } from "react-native";

/**
 * O Platform permite acessar informações de qual plataforma
 * o código está executando, se é Android, iOs, Web ou outros
 * ou até outras informações
 */

export default function Differentiate() {
  if (Platform.OS === 'android') {
    return <Text>You are using Android!</Text>;
  }

  if (Platform.OS === 'ios') {
    return <Text>You are using iOS!</Text>;
  }

  return <Text>What are you using?</Text>;
}

import First from './components/First';
import MinMax from './components/MinMax';
import RandomNumber from './components/RandomNumber';

import { View, StyleSheet } from 'react-native';

// View -> Componente base para a visualização dos outros componentes
// Text -> Onde colocamos os textos da aplicação mobile
// SafeAreaView -> Componente que impede o conteúdo do app vazar para áreas

/**
 * console.warn permite visualizar mensagens do console
 */

export default function App() {
  return (
    <View style={styles.app}>
      <First />
      <MinMax min={5} max={8} />
      <MinMax min={10} max={100} />
      <RandomNumber min={0} max={1000} />
    </View>
  ); 
}

const styles = StyleSheet.create({
  app: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

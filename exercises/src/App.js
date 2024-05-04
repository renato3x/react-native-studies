import AppButton from './components/AppButton';
import Counter from './components/Counter';
import First from './components/First';
import Fragment from './components/Fragment';
import MinMax from './components/MinMax';
import RandomNumber from './components/RandomNumber';

import { View, StyleSheet, Text } from 'react-native';
import DirectRoot from './components/direct/Root';
import IndirectRoot from './components/indirect/Root';
import CounterV2 from './components/counterv2/CounterV2';
import EvenOdd from './components/EvenOdd';
import Differentiate from './components/Differentiate';
import RelationsRoot from './components/relations/Root';
import RelationsChild from './components/relations/Child';
import LoggedUser from './components/LoggedUser';

// View -> Componente base para a visualização dos outros componentes
// Text -> Onde colocamos os textos da aplicação mobile
// SafeAreaView -> Componente que impede o conteúdo do app vazar para áreas

/**
 * console.warn permite visualizar mensagens do console
 */

export default function App() {
  return (
    <View style={styles.app}>
      {/* <First />
      <MinMax min={5} max={8} />
      <MinMax min={10} max={100} />
      <RandomNumber min={0} max={1000} /> */}
      {/* <Fragment 
        title="This is the main title"
        subtitle="My subtitle"
      /> */}
      {/* <AppButton/> */}
      {/* <Counter/>
      <Counter initial={0} step={5}/> */}
      {/* <DirectRoot/>
      <IndirectRoot/> */}
      {/* <CounterV2/> */}
      {/* <Differentiate/> */}
      {/* <EvenOdd number={12}/> */}
      {/* <RelationsRoot>
        <RelationsChild name="SEN" lastName="johnqt"/>
        <RelationsChild name="LOUD" lastName="Less"/>
        <RelationsChild name="LOUD" lastName="Saadhak"/>
        <RelationsChild name="LEV" lastName="aspas"/>
      </RelationsRoot> */}
      <LoggedUser
        user={{
          name: 'Renato',
          email: 'pereirarenato21@gmail.com',
        }}
      />
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

import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Button from './components/Button';
import Display from './components/Display';

type Operation = null | string;

export default function App() {
  const [ displayValue, setDisplayValue ] = useState('0');
  const [ operation, setOperation ] = useState<Operation>(null);
  const [ clearDisplay, setClearDisplay ] = useState(false);
  const [ values, setValues ] = useState([0, 0]);
  const [ currentIndex, setCurrentIndex ] = useState(0);

  function addDigit(value: string) {
    
    /**
     * -> Verificando se será necessário limpar o display antes de definir o
     * número
     * 
     * -> Concatenando os valores do display
     * 
     * -> Definindo que ainda não precisa limpar o display
    */
   
    const needsToClearDisplay = displayValue == '0' || clearDisplay;

    if (value == '.' && !needsToClearDisplay && displayValue.includes('.')) {
      /**
      * Se já houver um ponto no display, será impedido de outros serem digitados.
      */
      return;
    }

    const currentDisplayValue = needsToClearDisplay ? '' : displayValue;
    const newDisplayValue = currentDisplayValue + value;

    setDisplayValue(newDisplayValue);
    setClearDisplay(false);

    if (value != '.') {
      /**
       * -> Pegando o valor atual da calculadora e transformando
       * em um número
       * 
       * -> Fazendo uma cópia do array que guarda os valores para o cálculo em memória
       * 
       * -> Definindo na cópia e na posição atual dele o valor transformado em número
       * 
       * -> Definindo a cópia como valor atual
       */

      const newValue = Number(newDisplayValue);
      const newValues = [...values];
      newValues[currentIndex] = newValue;
      setValues(newValues);
    }
  }

  function clearMemory() {
    setDisplayValue('0');
    setOperation(null);
    setValues([0, 0]);
    setCurrentIndex(0);
  }

  function defineOperation(op: string) {
    /**
     * Se a operação de calculo tiver sido definida após digitar o primeiro número (currentIndex === 0)
     * significa que o próximo número digitado deverá ir pro próximo espaço da memória, ou seja, o currentIndex
     * vai atualizar para 1 e o próximo valor que for digitado, o display será limpo novamente.
     */

    if (currentIndex === 0) {
      setOperation(op);
      setCurrentIndex(1);
      setClearDisplay(true);
    } else {
      /**
       * Caso o index seja 1, então a operação que já estava presetada vai ser feita. Ou seja,
       * se anteriormente o usuário selecionou a soma, ela será feita dos dois valores salvos na memória,
       * e após o cálculo, será salva a próxima operação que será feita, caso não seja o valor "igual". Se
       * for o valor "igual", ele resetará para aguardar a próxima expressão.
       */

      /**
       * O valor calculado será salvo no primeiro espaço de memória, e o segundo espaço de memória será zerado para os próximos cálculos
       * e assim em diante.
       */
      const operationIsEquals = op == '=';
      const newValues = [...values];

      try {
        newValues[0] = eval(`${values[0]} ${operation} ${values[1]}`);
      } catch (error) {
        newValues[0] = values[0];
      }

      newValues[1] = 0;
      setDisplayValue(`${newValues[0]}`);
      setValues(newValues);
      setOperation(operationIsEquals ? null : op);
      setCurrentIndex(operationIsEquals ? 0 : 1);
      setClearDisplay(true);
    }
  }

  return (
    <View style={styles.container}>
      <Display value={displayValue}/>
      <View style={styles.buttons}>
        <Button 
          label="AC"
          triple
          onClick={clearMemory}
        />
        <Button
          label="÷"
          operation
          onClick={() => defineOperation('/')}
        />
        <Button
          label="7"
          onClick={() => addDigit('7')}
        />
        <Button
          label="8"
          onClick={() => addDigit('8')}
        />
        <Button
          label="9"
          onClick={() => addDigit('9')}
        />
        <Button
          label="×"
          operation
          onClick={() => defineOperation('*')}
        />
        <Button
          label="4"
          onClick={() => addDigit('4')}
        />
        <Button
          label="5"
          onClick={() => addDigit('5')}
        />
        <Button
          label="6"
          onClick={() => addDigit('6')}
        />
        <Button
          label="-"
          operation
          onClick={() => defineOperation('-')}
        />
        <Button
          label="1"
          onClick={() => addDigit('1')}
        />
        <Button
          label="2"
          onClick={() => addDigit('2')}
        />
        <Button
          label="3"
          onClick={() => addDigit('3')}
        />
        <Button
          label="+"
          operation
          onClick={() => defineOperation('+')}
        />
        <Button
          label="0"
          double
          onClick={() => addDigit('0')}
        />
        <Button
          label="."
          onClick={() => addDigit('.')}
        />
        <Button
          label="="
          operation
          onClick={() => defineOperation('=')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

import { Dimensions, StyleSheet, Text, TouchableHighlight } from 'react-native';

interface ButtonProps {
  onClick: (event?: any) => void;
  label: string;
  double: boolean;
  triple: boolean;
  operation: boolean;
}

export default function Button(props: Partial<ButtonProps>) {
  const buttonStyles: any[] = [styles.button];

  if (props.double) {
    buttonStyles.push(styles.doubleButton);
  }

  if (props.triple) {
    buttonStyles.push(styles.tripleButton);
  }

  if (props.operation) {
    buttonStyles.push(styles.operationButton);
  }

  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={buttonStyles}>{ props.label }</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888888'
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  doubleButton: {
    width: Dimensions.get('window').width / 4 * 2,
  },
  tripleButton: {
    width: Dimensions.get('window').width / 4 * 3,
  }
});

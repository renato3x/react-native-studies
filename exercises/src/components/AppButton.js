import { Button } from 'react-native';

export default function AppButton() {
  function execute() {
    console.warn('This button was clicked!');
  }

  return (
    <Button 
      title="Execute"
      onPress={execute}
    />
  )
}

import { Text } from 'react-native';
import If from './If';

export default function LoggedUser({ user = {} }) {
  return (
    <>
      <If test={Object.keys(user).length > 0}>
        <Text>{ user.name } - { user.email }</Text>
      </If>
    </>
  );
}

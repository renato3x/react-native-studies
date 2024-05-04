import { Text } from 'react-native';
import products from './products';
import styles from '../styles';

export default function ProductsList() {
  return (
    <>
      <Text style={styles.text}>Products List</Text>
      {products.map((p) => {
        const currencyFormatter = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        return <Text key={p.id}>{ p.id }) { p.name } - { currencyFormatter.format(p.price) }</Text>
      })}
    </>
  )
}

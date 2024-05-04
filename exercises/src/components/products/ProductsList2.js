import { Text, FlatList } from 'react-native';
import products from './products';
import styles from '../styles';

/**
 * FlatList é um componente do React Native, que
 * monta listas na tela
 */

export default function ProductsList2() {
  return (
    <>
      <Text style={styles.text}>Products List</Text>
      <FlatList
        data={products}
        renderItem={({ item: p }) => {
          const currencyFormatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          });

          return <Text>{ p.id }) { p.name } - { currencyFormatter.format(p.price) }</Text>
        }}
      />
    </>
  )
}

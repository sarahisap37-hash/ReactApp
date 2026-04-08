import { View, Text, FlatList } from 'react-native';
import { globalStyles } from '../../assets/styles/styles';
import { useCart } from '../_layout'; // Importa do layout pai

export default function CartScreen() {
  const { cart } = useCart();
  const total = cart.reduce((sum: number, item: any) => sum + item.price, 0);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.cartHeader}>
        <Text style={globalStyles.totalValue}>Total: R$ {total.toFixed(2)}</Text>
      </View>
      <FlatList
        data={cart}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={globalStyles.cartItem}>
            <Text style={{ flex: 1 }}>{item.title}</Text>
            <Text style={{ fontWeight: 'bold' }}>R$ {item.price.toFixed(2)}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={{textAlign: 'center', marginTop: 20}}>Vazio</Text>}
      />
    </View>
  );
}
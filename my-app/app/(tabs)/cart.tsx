import { SafeAreaView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../assets/styles/styles';
import { useCart } from '../_layout';

export default function CartScreen() {
  const { cart, clearCart } = useCart();

  const total = cart?.reduce((sum: number, item: any) => sum + (item.price || 0), 0) || 0;

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.screenHeader}>
        <Text style={globalStyles.sectionTitle}>Meu carrinho</Text>
        <Text style={globalStyles.sectionSubtitle}>
          Veja os itens adicionados e finalize sua compra com tranquilidade.
        </Text>
      </View>
      <View style={globalStyles.infoCard}>
        <Text style={globalStyles.sectionTitle}>R$ {total.toFixed(2)}</Text>
        <Text style={globalStyles.sectionSubtitle}>{cart.length} item{cart.length !== 1 ? 's' : ''} no carrinho</Text>
        {cart?.length > 0 ? (
          <TouchableOpacity style={globalStyles.secondaryButton} onPress={clearCart}>
            <Text style={globalStyles.secondaryButtonText}>Limpar carrinho</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      <FlatList
        data={cart}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          // Verificamos se o item existe antes de renderizar
          item ? (
            <View style={globalStyles.cartItem}>
               <Text style={{ flex: 1 }}>{item.title}</Text>
               <Text style={{ fontWeight: 'bold' }}>R$ {item.price?.toFixed(2)}</Text>
            </View>
          ) : null
        )}
        ListEmptyComponent={
          <Text style={globalStyles.emptyText}>
            Seu carrinho está vazio.
          </Text>
        }
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 30 }}
      />
    </SafeAreaView>
  );
}
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import { globalStyles } from '../../assets/styles/styles';
import { useCart } from '../_layout';

export default function UserScreen() {
  const { cart } = useCart();
  const itemCount = cart?.length || 0;
  const total = cart?.reduce((sum: number, item: any) => sum + (item.price || 0), 0) || 0;

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View style={globalStyles.screenHeader}>
          <Text style={globalStyles.sectionTitle}>Sua conta</Text>
          <Text style={globalStyles.sectionSubtitle}>
            Veja o status do seu carrinho, suas informações e dicas para continuar comprando.
          </Text>
        </View>

        <View style={globalStyles.infoCard}>
          <Text style={globalStyles.sectionTitle}>Cliente VIP</Text>
          <Text style={globalStyles.sectionSubtitle}>Email: cliente@example.com</Text>
          <Text style={[globalStyles.sectionSubtitle, { marginTop: 8 }]}>Você tem {itemCount} itens no carrinho, totalizando R$ {total.toFixed(2)}.</Text>
        </View>

        <View style={globalStyles.infoCard}>
          <Text style={globalStyles.sectionTitle}>Dicas rápidas</Text>
          <Text style={[globalStyles.sectionSubtitle, { marginTop: 10 }]}>Aproveite os produtos mais vendidos na aba Home e finalize sua compra sempre pela aba Carrinho.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

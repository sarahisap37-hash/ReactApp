import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  // Card
  card: { backgroundColor: '#fff', padding: 12, margin: 8, borderRadius: 15, width: '46%', elevation: 4 },
  cardImage: { width: '100%', height: 100, resizeMode: 'contain', marginBottom: 8 },
  cardTitle: { fontSize: 14, fontWeight: '600', color: '#333', height: 40 },
  cardPrice: { fontSize: 16, fontWeight: 'bold', color: '#27ae60' },
  // Botões
  button: { backgroundColor: '#007AFF', padding: 10, borderRadius: 8, marginTop: 5 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 12 },
  // Carrinho
  cartHeader: { padding: 20, backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#eee' },
  totalValue: { fontSize: 20, fontWeight: 'bold', color: '#27ae60', textAlign: 'right' },
  cartItem: { flexDirection: 'row', padding: 15, backgroundColor: '#fff', marginVertical: 4, marginHorizontal: 12, borderRadius: 10, justifyContent: 'space-between' },
});
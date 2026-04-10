import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const globalStyles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#eef2ff',
    width: '100%',
  },
  loading: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    minHeight: 300 
  },
  // CARD MELHORADO: Garante que os produtos apareçam lado a lado
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 16,
    margin: 10,
    width: width > 800 ? 220 : (width / 2) - 25, 
    borderWidth: 1,
    borderColor: '#dfe4ff',
    elevation: 5,
    shadowColor: '#6c63ff',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    alignItems: 'center',
    justifyContent: 'space-between', // Mantém o botão sempre embaixo
  },
  cardImage: {
    width: '100%',
    height: 160,
    borderRadius: 16,
    marginBottom: 10,
    backgroundColor: '#eef3ff',
  },
  cardTitle: { 
    fontSize: 15, 
    fontWeight: '700', 
    textAlign: 'center', 
    height: 44, 
    color: '#2b3d9a',
    marginBottom: 6 
  },
  cardPrice: { 
    fontSize: 17, 
    color: '#ff6b81', 
    fontWeight: 'bold', 
    marginBottom: 12 
  },
  button: { 
    backgroundColor: '#6c5ce7', 
    paddingVertical: 12, 
    borderRadius: 12, 
    width: '100%',
    alignItems: 'center'
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold',
    fontSize: 14 
  },
  screenHeader: {
    backgroundColor: '#eef3ff',
    borderRadius: 24,
    padding: 22,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#5b3cc4',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 6,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#2b3d9a',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#4a55a8',
    lineHeight: 24,
  },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 22,
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#5b3cc4',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 5,
  },
  cardDescription: {
    fontSize: 12,
    color: '#777',
    lineHeight: 18,
    marginBottom: 12,
  },
  cardFooter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondaryButton: {
    marginTop: 12,
    alignSelf: 'flex-start',
    backgroundColor: '#ebe7ff',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
  },
  secondaryButtonText: {
    color: '#6c5ce7',
    fontWeight: '700',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    color: '#5b5fc4',
    fontSize: 15,
  },
  // ESTILO DAS ABAS (TABS) E CARRINHO
  cartHeader: { 
    padding: 25, 
    backgroundColor: '#fff', 
    borderBottomWidth: 1, 
    borderColor: '#eee',
    marginBottom: 10 
  },
  totalValue: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#27ae60', 
    textAlign: 'right' 
  },
  cartItem: { 
    padding: 15, 
    backgroundColor: '#f8f7ff', 
    marginHorizontal: 15,
    marginBottom: 8, 
    borderRadius: 14,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#dcd7ff',
    borderWidth: 1,
    shadowColor: '#5b3cc4',
    shadowOpacity: 0.04,
    elevation: 2
  }
});
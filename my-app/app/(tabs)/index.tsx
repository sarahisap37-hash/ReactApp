import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator, Text, Dimensions, Alert, SafeAreaView } from 'react-native';
import ProductCard from '../../components/ProductCard';
import { globalStyles } from '../../assets/styles/styles';
import { useCart } from '../_layout'; 

type Product = {
  id: number | string;
  title: string;
  price: number;
  image: string;
  description?: string;
};

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80';

// Seus produtos manuais (adicione quantos quiser aqui)
const MEUS_PRODUTOS_NOVOS: Product[] = [
  {
    id: 999,
    title: "Meu Produto Exclusivo",
    price: 150.00,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    description: "Um produto premium exclusivo para sua vitrine."
  },
  {
    id: 1000,
    title: "Segundo Produto Local",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    description: "Produto acessível com estilo e qualidade."
  },
  {
    id: 1001,
    title: "Kit Home Office",
    price: 249.90,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    description: "Tudo para montar seu espaço de trabalho com conforto."
  },
  {
    id: 1002,
    title: "Fone Sem Fio",
    price: 179.50,
    image: "https://images.unsplash.com/photo-1512446819135-2c7f93cb9c20?auto=format&fit=crop&w=600&q=80",
    description: "Som limpo e autonomia para o dia inteiro."
  },
  {
    id: 1003,
    title: "Mochila Urbana",
    price: 129.90,
    image: "https://images.unsplash.com/photo-1523275335684-b0f332c24ec9?auto=format&fit=crop&w=600&q=80",
    description: "Design moderno com bolsos inteligentes."
  },
  {
    id: 1004,
    title: "Caneca Premium",
    price: 39.90,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
    description: "Caneca estilosa para suas bebidas favoritas."
  },
  {
    id: 1005,
    title: "Relógio Moderno",
    price: 229.90,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80",
    description: "Relógio minimalista com pulseira confortável."
  },
  {
    id: 1006,
    title: "Tênis Esportivo",
    price: 199.90,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    description: "Leve e confortável para o dia a dia."
  },
  {
    id: 1007,
    title: "Suporte de Celular",
    price: 59.90,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    description: "Suporte ajustável para seu celular na mesa ou no carro."
  },
  {
    id: 1008,
    title: "Luminária LED",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78b?auto=format&fit=crop&w=600&q=80",
    description: "Iluminação suave perfeita para escritório ou estudo."
  },
  {
    id: 1009,
    title: "Cadeira Gamer",
    price: 499.90,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    description: "Conforto ergonômico para longas horas de uso." 
  },
  {
    id: 1010,
    title: "Carteira Slim",
    price: 69.90,
    image: "https://images.unsplash.com/photo-1512432115944-9b4f265d8f05?auto=format&fit=crop&w=600&q=80",
    description: "Carteira compacta com proteção para cartões."
  },
];

export default function HomeScreen() {
  // 1. O estado começa vazio
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); 

  const screenWidth = Dimensions.get('window').width;
  const numColumns = screenWidth > 800 ? 4 : 2;

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(apiData => {
        // 2. O SEGREDO: Juntamos os seus produtos com os da API em uma única lista
        const listaCompleta = [
          ...MEUS_PRODUTOS_NOVOS,
          ...apiData.map((product: any) => ({
            ...product,
            image: product.image || DEFAULT_IMAGE,
            description: product.description || 'Descrição breve não disponível.',
          })),
        ];
        setProducts(listaCompleta);
      })
      .catch(err => {
        console.error("Erro na API, carregando apenas locais:", err);
        // Se a internet falhar, mostra pelo menos os seus
        setProducts(MEUS_PRODUTOS_NOVOS);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = (item: Product) => {
    if (addToCart) {
      addToCart(item);
      // Feedback universal (funciona no PC e Celular)
      Alert.alert('Carrinho', `${item.title} foi para o carrinho!`);
    }
  };

  if (loading) return (
    <View style={globalStyles.loading}>
      <ActivityIndicator size="large" color="#007AFF" />
      <Text style={{ marginTop: 10, color: '#666' }}>Carregando NeoMarket...</Text>
    </View>
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.screenHeader}>
        <Text style={globalStyles.sectionTitle}>NeoMarket</Text>
        <Text style={globalStyles.sectionSubtitle}>
          Navegue pelos melhores itens e adicione ao carrinho com um toque.
        </Text>
      </View>
      <FlatList
        data={products}
        key={numColumns}
        numColumns={numColumns}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ 
          paddingVertical: 10,
          paddingHorizontal: screenWidth > 800 ? 40 : 10,
          alignItems: 'center' 
        }}
        renderItem={({ item }) => (
          <ProductCard 
            product={item} 
            onPress={() => handleAdd(item)} 
          />
        )}
        ListEmptyComponent={
          <Text style={globalStyles.emptyText}>Nenhum produto encontrado.</Text>
        }
        ListFooterComponent={<View style={{ height: 30 }} />}
      />
    </SafeAreaView>
  );
}
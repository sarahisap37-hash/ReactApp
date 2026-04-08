import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import ProductCard from '../../components/ProductCard';
import { globalStyles } from '../../assets/styles/styles';
import { useCart } from '../_layout'; // Importa do layout pai

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // Puxa a função do contexto interno

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator style={globalStyles.loading} size="large" />;

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={() => addToCart(item)} />
        )}
      />
    </View>
  );
}
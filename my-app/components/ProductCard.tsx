import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../assets/styles/styles';

export default function ProductCard({ product, onPress }: any) {
  return (
    <View style={globalStyles.card}>
      <Image source={{ uri: product.image }} style={globalStyles.cardImage} />
      <Text style={globalStyles.cardTitle} numberOfLines={2}>{product.title}</Text>
      <Text style={globalStyles.cardPrice}>R$ {product.price.toFixed(2)}</Text>
      <TouchableOpacity style={globalStyles.button} onPress={onPress}>
        <Text style={globalStyles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../assets/styles/styles';

const IMAGE_FALLBACK = { uri: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80' };

export default function ProductCard({ product, onPress }: any) {
  const [imageError, setImageError] = useState(false);

  // 1. Bloqueio de segurança: se o produto for nulo, não renderiza nada
  if (!product) return null;

  // 2. Fallbacks (Reservas) para imagem e preço
  const imageUrl = !imageError && product.image && typeof product.image === 'string' && product.image.length > 0
    ? { uri: product.image }
    : IMAGE_FALLBACK;

  const displayPrice = typeof product.price === 'number' 
    ? product.price.toFixed(2) 
    : "0.00";

  return (
    <View style={globalStyles.card}>
      {/* Container da Imagem */}
      <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Image 
          source={imageUrl} 
          style={globalStyles.cardImage}
          resizeMode="cover"
          onError={() => setImageError(true)}
        />
      </View>
      
      {/* Container de Informações */}
      <View style={{ width: '100%', marginVertical: 10 }}>
        <Text style={globalStyles.cardTitle} numberOfLines={2}>
          {product.title || "Produto indisponível"}
        </Text>
        <Text style={globalStyles.cardDescription} numberOfLines={2}>
          {product.description || "Descrição não disponível."}
        </Text>
        <View style={globalStyles.cardFooter}>
          <Text style={globalStyles.cardPrice}>
            R$ {displayPrice}
          </Text>
        </View>
      </View>
      
      {/* Botão Adicionar */}
      <TouchableOpacity 
        style={globalStyles.button} 
        onPress={() => onPress && onPress(product)}
        activeOpacity={0.7}
      >
        <Text style={globalStyles.buttonText}>ADICIONAR</Text>
      </TouchableOpacity>
    </View>
  );
}
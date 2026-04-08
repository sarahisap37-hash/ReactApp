import { Stack } from 'expo-router';
import { useState, createContext, useContext } from 'react';

// Criando o contexto aqui mesmo para não precisar de pasta extra
const CartContext = createContext<any>(null);

export default function RootLayout() {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CartContext.Provider>
  );
}

// Hook para usar o carrinho em qualquer tela
export const useCart = () => useContext(CartContext);
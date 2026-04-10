import { Stack } from 'expo-router';
import { useState, createContext, useContext } from 'react';

// Criamos o contexto e o exportamos para que as telas o encontrem
const CartContext = createContext<any>(null);

export default function RootLayout() {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    if (product) {
      setCart((currentCart) => [...currentCart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CartContext.Provider>
  );
}

// Hook para ser usado pelas telas (tabs)
export const useCart = () => useContext(CartContext);
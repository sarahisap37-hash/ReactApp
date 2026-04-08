import { Tabs, useLocalSearchParams } from 'expo-router';

export default function TabLayout() {
  const params = useLocalSearchParams();

  return (
    <Tabs screenOptions={{ headerTitleAlign: 'center', tabBarActiveTintColor: '#007AFF' }}>
      <Tabs.Screen 
        name="index" 
        options={{ title: 'Produtos' }} 
        initialParams={params} 
      />
      <Tabs.Screen 
        name="cart" 
        options={{ title: 'Meu Carrinho' }} 
        initialParams={params} 
      />
    </Tabs>
  );
}
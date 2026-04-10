#  E-Commerce Simplificado - React Native

Este é um aplicativo de e-commerce funcional desenvolvido com **React Native** e **Expo Router**. 

##  Funcionalidades

- **Listagem de Produtos**: Consumo.
- **Carrinho de Compras**: Adição de produtos.
- **Cálculo de Total**: Somatória automática dos preços dos itens no carrinho.
- **Navegação por Abas**: Alternância entre a vitrine e o carrinho de compras.
- **Layout Responsivo**: Design adaptável para diferentes tamanhos de tela.


```text
my-app/
├── app/
│   ├── (tabs)/
│   │   ├── cart.tsx        # Tela do Carrinho
│   │   ├── index.tsx       # Tela de Listagem (Home)
│   │   └── _layout.tsx     # Configuração das abas inferiores
│   └── _layout.tsx         # Layout Raiz (Gerenciamento de Estado Global)
├── assets/
│   └── styles/
│       └── styles.tsx      # Centralização de toda a estética do App
├── components/
│   └── ProductCard.tsx     # Componente reutilizável de card de produto
└── constants/              # Cores e valores fixos
```

##  Arquitetura Técnica

### 1. Gerenciamento de Estado
Para atender aos requisitos de simplicidade, utilizamos o **State Lifting** dentro do `app/_layout.tsx`. Criamos um Contexto interno no arquivo raiz que provê a função `addToCart` e o estado `cart` para todas as telas filhas, evitando o erro de parâmetros não-serializáveis na navegação.

### 2. Estilização Centralizada
Seguindo o padrão de design unificado, todos os estilos foram movidos para `assets/styles/styles.tsx`. Isso permite que alterações visuais em botões, fontes ou cores reflitam instantaneamente em todo o aplicativo.

### 3. Navegação Hierárquica
- **Stack Navigation**: Utilizada no nível raiz para gerenciar o fluxo principal.
- **Tab Navigation**: Utilizada dentro do grupo `(tabs)` para a experiência de usuário clássica de e-commerce mobile.

## 🚦 Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/nome-do-projeto.git
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor do Expo:**
   ```bash
   npx expo start
   ```

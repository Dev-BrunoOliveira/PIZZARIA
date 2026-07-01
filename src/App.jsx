import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cardapio from "./components/Cardapio";
import Contato from "./components/Contato";
import MonteSuaPizza from "./components/MonteSuaPizza";
import CartModal from "./components/CartModal";

export const formatPrice = (price) => {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export const pizzasData = [
  {
    id: 1,
    nome: "Margherita",
    descricao: "Molho de tomate, mussarela, manjericão fresco",
    preco: 39.90,
    img: "/img/Margherita.jpg",
  },
  {
    id: 2,
    nome: "Calabresa",
    descricao: "Calabresa artesanal, cebola, orégano",
    preco: 42.00,
    img: "/img/Calabresa.jpg",
  },
  {
    id: 3,
    nome: "Portuguesa",
    descricao: "Presunto de Parma, ervilha e um ovo estalado por cima",
    preco: 42.00,
    img: "/img/Portuguesa.jpg",
  },
  {
    id: 4,
    nome: "Baiana",
    descricao:
      "Linguiça calabresa, cebola, tomate, pimentão assado, e pimenta calabresa",
    preco: 47.00,
    img: "/img/Baiana.jpg",
  },
  {
    id: 5,
    nome: "Mussarela Clássica",
    descricao: "Mussarela, orégano, azeitonas",
    preco: 47.00,
    img: "/img/Mussarela.jpg",
  },
  {
    id: 6,
    nome: "Frango com Catupiry",
    descricao: "Frango, catupiry, orégano e azeitonas",
    preco: 47.00,
    img: "/img/FrangoCatupiry.png",
  },
  {
    id: 7,
    nome: "Pepperoni",
    descricao: "Pepperoni, molho e muito queijo",
    preco: 47.00,
    img: "/img/Pepperoni.jpg",
  },
  {
    id: 8,
    nome: "Lombo",
    descricao: "Lombo, queijo e molho de tomate",
    preco: 47.00,
    img: "/img/Lombo.jpg",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.cartId === item.cartId);
      if (existing) {
        return prev.map((i) =>
          i.cartId === item.cartId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (cartId) => {
    setCart((prev) => prev.filter((i) => i.cartId !== cartId));
  };

  const updateQuantity = (cartId, delta) => {
    setCart((prev) =>
      prev.map((i) => {
        if (i.cartId === cartId) {
          const newQ = i.quantity + delta;
          return newQ > 0 ? { ...i, quantity: newQ } : i;
        }
        return i;
      })
    );
  };

  return (
    <>
      <Navbar 
        cartCount={cart.reduce((acc, i) => acc + i.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      <Hero />
      <MonteSuaPizza pizzas={pizzasData} addToCart={addToCart} />
      <Cardapio pizzas={pizzasData} addToCart={addToCart} />
      <Contato />
      {isCartOpen && (
        <CartModal 
          cart={cart} 
          onClose={() => setIsCartOpen(false)} 
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      )}
    </>
  );
}

export default App;

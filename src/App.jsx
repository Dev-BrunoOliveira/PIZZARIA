import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cardapio from "./components/Cardapio";
import Contato from "./components/Contato";

function App() {
  const pizzas = [
    {
      nome: "Margherita",
      descricao: "Molho de tomate, mussarela, manjericão fresco",
      preco: "R$ 39,90",
      img: "/img/Margherita.jpg",
    },
    {
      nome: "Calabresa",
      descricao: "Calabresa artesanal, cebola, orégano",
      preco: "R$ 42,00",
      img: "/img/Calabresa.jpg",
    },
    {
      nome: "Portuguesa",
      descricao: "Presunto de Parma, ervilha e um ovo estalado por cima",
      preco: "R$ 42,00",
      img: "/img/Portuguesa.jpg",
    },
    {
      nome: "Baiana",
      descricao:
        "Linguiça calabresa, cebola, tomate, pimentão assado, e pimenta calabresa",
      preco: "R$ 47,00",
      img: "/img/Baiana.jpg",
    },
    {
      nome: "Mussarela Clássica",
      descricao: "Mussarela, orégano, azeitonas",
      preco: "R$ 47,00",
      img: "/img/Mussarela.jpg",
    },
    {
      nome: "Frango com Catupiry",
      descricao: "Frango, catupiry, orégano e azeitonas",
      preco: "R$ 47,00",
      img: "/img/FrangoCatupiry.png",
    },
    {
      nome: "Pepperoni",
      descricao: "Pepperoni, molho e muito queijo",
      preco: "R$ 47,00",
      img: "/img/Pepperoni.jpg",
    },
    {
      nome: "Lombo",
      descricao: "Lombo, queijo e molho de tomate",
      preco: "R$ 47,00",
      img: "/img/Lombo.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <Cardapio pizza={pizzas} />
      <Contato />
    </>
  );
}

export default App;

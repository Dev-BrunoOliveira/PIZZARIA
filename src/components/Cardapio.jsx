function Cardapio() {
  return (
    <section id="cardapio" className="sessao">
      <h2>Cardápio</h2>
      <div className="pizzas">
        <div className="pizza">
          <img
            src="/img/Margherita.jpg" alt="imagem-ilustrativa"
            className="img"
          />
          <h3>Margherita</h3>
          <p>Molho de tomate, mussarela, manjericão fresco</p>
          <span>R$ 39,90</span>
        </div>
        <div className="pizza">
          <img
            src="/img/Calabresa.jpg" alt="imagem-ilustrativa"
            className="img"
          />
          <h3>Calabresa</h3>
          <p>Calabresa artesanal, cebola, orégano</p>
          <span>R$ 42,00</span>
        </div>
        <div className="pizza">
          <img
            src="/img/Portuguesa.jpg" alt="imagem-ilustrativa"
            className="img"
          />
          <h3>Portuguesa</h3>
          <p>Presunto de Parma, ervilha e um ovo estalado por cima</p>
          <span>R$ 42,00</span>
        </div>
        <div className="pizza">
          <img
            src="/img/Baiana.jpg" alt="imagem-ilustrativa"
            className="img"
          />
          <h3>Baiana</h3>
          <p>Linguiça calabresa, cebola, tomate, pimentão assado, e pimenta calabresa</p>
          <span>R$ 47,00</span>
        </div>
        <div className="pizza">
          <img
            src="/img/Mussarela.jpg" alt="imagem-ilustrativa"
            className="img"
          />
          <h3>Mussarela Clássica</h3>
          <p>Mussarela, orégano, azeitonas</p>
          <span>R$ 47,00</span>
        </div>
        <div className="pizza">
          <img
            src="/img/FrangoCatupiry.png" alt="imagem-ilustrativa"
            className="img"
          />
          <h3>Frango com Catupiry</h3>
          <p>Frango, catupiry, orégano e azeitonas</p>
          <span>R$ 47,00</span>
        </div>
        <div className="pizza">
          <img
            src="/img/Pepperoni.jpg" alt="imagem-ilustrativa"
            className="img"
          />
          <h3>Pepperoni</h3>
          <p>Pepperoni,molho e Muito queijo</p>
          <span>R$ 47,00</span>
        </div>
        <div className="pizza">
          <img
            src="/img/Lombo.jpg" alt="imagem-ilustrativa"
            className="img"
          />
          <h3>Lombo</h3>
          <p>Lombo, queijo e molhode tomate</p>
          <span>R$ 47,00</span>
        </div>
      </div>
    </section>
  );
}

export default Cardapio;

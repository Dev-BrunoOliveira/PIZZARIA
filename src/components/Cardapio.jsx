
function Cardapio({ pizza }) {
  return (
    <section id="cardapio" className="sessao">
      <h2>Cardápio</h2>
      <div className="pizzas">
        {pizza.map((item, index) => (
          <div key={index} className="pizza">
            <img src={item.img} alt="imagem-ilustrativa" className="img" />
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
            <span>{item.preco}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cardapio;

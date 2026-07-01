import { formatPrice } from "../App";

function Cardapio({ pizzas, addToCart }) {
  return (
    <section id="cardapio" className="sessao">
      <h2>Nosso Cardápio</h2>
      <div className="pizzas">
        {pizzas.map((item) => (
          <div key={item.id} className="pizza">
            <div className="img-container">
              <img src={item.img} alt={item.nome} className="img" />
            </div>
            <div className="pizza-info">
              <h3>{item.nome}</h3>
              <p>{item.descricao}</p>
              <div className="pizza-price-row">
                <span>{formatPrice(item.preco)}</span>
                <button 
                  className="btn-add-small" 
                  onClick={() => addToCart({
                    cartId: `inteira-${item.id}`,
                    name: item.nome,
                    price: item.preco,
                    type: "inteira",
                    img: item.img
                  })}
                >
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cardapio;

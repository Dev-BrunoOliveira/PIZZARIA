import React, { useState } from "react";
import { formatPrice } from "../App";

function MonteSuaPizza({ pizzas, addToCart }) {
  const [metade1, setMetade1] = useState(pizzas[0]);
  const [metade2, setMetade2] = useState(pizzas[0]);

  // Price rule: Most expensive half
  const preco = Math.max(metade1.preco, metade2.preco);

  const handleAdd = () => {
    const item = {
      cartId: `meia-${metade1.id}-${metade2.id}`,
      name: `1/2 ${metade1.nome} e 1/2 ${metade2.nome}`,
      price: preco,
      type: "meio-a-meio",
      img: metade1.img // Usar imagem da primeira metade como representação
    };
    addToCart(item);
  };

  return (
    <section id="monte-sua-pizza" className="sessao monte-sua-pizza-container">
      <h2>Monte Sua Pizza</h2>
      <p className="monte-subtitle">Escolha dois sabores e nós preparamos metade de cada! Cobraremos pelo sabor de maior valor.</p>
      
      <div className="monte-box">
        <div className="monte-selections">
          <div className="monte-half">
            <label>Metade 1:</label>
            <select 
              value={metade1.id} 
              onChange={(e) => setMetade1(pizzas.find(p => p.id === parseInt(e.target.value)))}
            >
              {pizzas.map((p) => (
                <option key={p.id} value={p.id}>{p.nome} - {formatPrice(p.preco)}</option>
              ))}
            </select>
          </div>

          <div className="monte-half">
            <label>Metade 2:</label>
            <select 
              value={metade2.id} 
              onChange={(e) => setMetade2(pizzas.find(p => p.id === parseInt(e.target.value)))}
            >
              {pizzas.map((p) => (
                <option key={p.id} value={p.id}>{p.nome} - {formatPrice(p.preco)}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="monte-summary">
          <h3>Sua Pizza: 1/2 {metade1.nome} e 1/2 {metade2.nome}</h3>
          <div className="monte-price">{formatPrice(preco)}</div>
          <button className="btn btn-add" onClick={handleAdd}>Adicionar ao Carrinho</button>
        </div>
      </div>
    </section>
  );
}

export default MonteSuaPizza;

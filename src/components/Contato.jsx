import React from "react";
import "../index.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contato = () => {
  return (
    <section id="contato" className="contato-container">
      <h2>Entre em contato 🍕</h2>
      <div className="contato-content">
        <div className="contato-info-box">
          <div className="contato-card">
            <h3>📍 Endereço</h3>
            <p>Av. Florestan Fernandes, 812</p>
            <p>Jardim Pte. Alta I, Guarulhos - SP</p>
          </div>
          
          <div className="contato-card">
            <h3>📞 Telefone / WhatsApp</h3>
            <a href="https://wa.me/5511976203951" target="_blank" rel="noreferrer">
              (11) 97620-3951
            </a>
          </div>

          <div className="contato-card">
            <h3>🕒 Horário de Funcionamento</h3>
            <p>Terça a Domingo: 18h às 23h</p>
            
            <div className="redes-sociais">
              <a href="https://www.instagram.com/pizzariadonatello_ofc/" target="_blank" rel="noreferrer">
                <FaInstagram size={20} /> Instagram
              </a>
              <a href="https://wa.me/5511976203951" target="_blank" rel="noreferrer">
                <FaWhatsapp size={20} /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="promo-box">
          <div className="promo-image">
            <img src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80" alt="Combo Família" />
            <div className="promo-badge">Mais Pedido</div>
          </div>
          <div className="promo-info">
            <h3>Combo Família Donatello 🍕🥤</h3>
            <p>1 Pizza Grande (Até 2 sabores) + 1 Refrigerante 2L por um preço especial!</p>
            <a href="https://wa.me/5511976203951" target="_blank" rel="noreferrer" className="btn-promo">
              Garantir Meu Combo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;

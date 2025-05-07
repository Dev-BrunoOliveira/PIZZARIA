import React from "react";
import "../index.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";


const Contato = () => {
  return (
    <section id="contato" className="contato-container">
      <h2>Entre em contato 🍕</h2>

      <div className="contato-info">
        <p>
          📍 <strong>Endereço:</strong> Av. Florestan Fernandes, 812 - Jardim Pte. Alta I, Guarulhos - SP
        </p>
        <p>
          📞 <strong>Telefone / WhatsApp:</strong>{" "}
          <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
            (11) 97620-3951
          </a>
        </p>
      </div>

      <div className="mapa">
      <iframe
  title="Localização da Pizzaria"
  src="https://www.google.com/maps/embed?pb=SEU_CODIGO_COMPLETO"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
></iframe>

      </div>

      <div className="horario-redes">
        <div>
          <h3>🕒 Horário de Funcionamento</h3>
          <p>Terça a Domingo: 18h às 23h</p>
        </div>

        <div className="redes-sociais">
  <h3>📱 Siga a gente</h3>
  <a
    href="https://www.instagram.com/pizzariadonatello_ofc/"
    target="_blank"
    rel="noreferrer"
  >
    <FaInstagram style={{ marginRight: "8px" }} />
    Instagram
  </a>
        </div>
      </div>
    </section>
  );
};

export default Contato;

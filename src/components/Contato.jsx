import React from "react";
import "../index.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Contato = () => {
  return (
    <section id="contato" className="contato-container">
      <h2>Entre em contato 🍕</h2>

      <div className="contato-info">
        <p>
          📍 <strong>Endereço:</strong> Av. Florestan Fernandes, 812 - Jardim
          Pte. Alta I, Guarulhos - SP
        </p>
        <p>
          📞 <strong>Telefone / WhatsApp:</strong>{" "}
          <a
            href="https://wa.me/5511976203951"
            target="_blank"
            rel="noreferrer"
          >
            (11) 97620-3951
          </a>
        </p>
      </div>

      <div className="mapa">
        <iframe
          title="Localização da Pizzaria"
          src="https://www.google.com/maps/place/Av.+Florestan+Fernandes,+812+-+Jardim+Pte.+Alta+I,+Guarulhos+-+SP/@-23.4093312,-46.4183827,1006m/data=!3m2!1e3!4b1!4m5!3m4!1s0x94ce89bc0d1a3b9d:0x9c95f9d9cffe5c20!8m2!3d-23.4093312!4d-46.4158078?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D"
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

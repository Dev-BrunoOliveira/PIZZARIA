import React, { useState } from "react";
import { formatPrice } from "../App";
import { FaTrash, FaTimes, FaPlus, FaMinus } from "react-icons/fa";

function CartModal({ cart, onClose, onRemove, onUpdateQuantity }) {
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");

  // Address states
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [frete, setFrete] = useState(0);
  const [cepError, setCepError] = useState("");
  const [isLoadingCep, setIsLoadingCep] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  const applyCoupon = () => {
    setCouponError("");
    const code = couponCode.toUpperCase().trim();
    if (code === "DONATELLO10") {
      setDiscount(0.10); // 10% off
    } else if (code === "") {
      setDiscount(0);
    } else {
      setCouponError("Cupom inválido ou expirado.");
      setDiscount(0);
    }
  };

  const handleCepChange = async (e) => {
    let value = e.target.value.replace(/\D/g, "");
    setCep(value);
    
    if (value.length === 8) {
      setIsLoadingCep(true);
      setCepError("");
      try {
        const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);
        const data = await response.json();
        
        if (data.erro) {
          setCepError("CEP não encontrado.");
          setFrete(0);
        } else {
          setRua(data.logradouro || "");
          setBairro(data.bairro || "");
          
          // Calcula frete fictício baseado nos ultimos dígitos do CEP
          const lastDigits = parseInt(value.substring(5));
          const simulatedDistance = (lastDigits % 15) + 2; // entre 2km e 16km
          const calculatedFrete = simulatedDistance * 1.5; // R$ 1.50 por km
          setFrete(calculatedFrete);
        }
      } catch (error) {
        setCepError("Erro ao buscar CEP.");
        setFrete(0);
      } finally {
        setIsLoadingCep(false);
      }
    } else {
      setFrete(0);
      setRua("");
      setBairro("");
    }
  };

  const discountValue = subtotal * discount;
  const total = subtotal - discountValue + frete;

  const handleCheckout = () => {
    if (!cep || !rua || !numero || !bairro) {
      alert("Por favor, preencha o endereço de entrega completo para prosseguir.");
      return;
    }

    let msg = "Olá, Donatello! Gostaria de fazer o seguinte pedido:%0A%0A";
    cart.forEach(item => {
      msg += `*${item.quantity}x* ${item.name} (${formatPrice(item.price * item.quantity)})%0A`;
    });
    
    msg += `%0A*Subtotal:* ${formatPrice(subtotal)}`;
    if (discount > 0) {
      msg += `%0A*Desconto:* -${formatPrice(discountValue)}`;
    }
    msg += `%0A*Frete:* ${formatPrice(frete)}`;
    msg += `%0A*Total a pagar:* ${formatPrice(total)}%0A`;
    
    msg += `%0A*Endereço de Entrega:*`;
    msg += `%0A${rua}, ${numero} - ${bairro}`;
    if (complemento) msg += ` (${complemento})`;
    msg += `%0ACEP: ${cep}`;

    msg += "%0A%0AForma de pagamento irei combinar por aqui.";

    window.open(`https://wa.me/5511976203951?text=${msg}`, "_blank");
  };

  return (
    <div className="cart-overlay">
      <div className="cart-modal">
        <div className="cart-header">
          <h2>Seu Pedido</h2>
          <button className="close-btn" onClick={onClose}><FaTimes size={24} /></button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart">Seu carrinho está vazio.</p>
          ) : (
            cart.map((item) => (
              <div key={item.cartId} className="cart-item">
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <div className="item-price">{formatPrice(item.price)}</div>
                </div>
                <div className="item-actions">
                  <div className="quantity-controls">
                    <button onClick={() => onUpdateQuantity(item.cartId, -1)}><FaMinus size={12}/></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.cartId, 1)}><FaPlus size={12}/></button>
                  </div>
                  <button className="remove-btn" onClick={() => onRemove(item.cartId)}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer scrollable-footer">
            <div className="coupon-section">
              <div className="coupon-input-group">
                <input 
                  type="text" 
                  placeholder="Cupom de Desconto" 
                  value={couponCode} 
                  onChange={(e) => setCouponCode(e.target.value)} 
                />
                <button onClick={applyCoupon}>Aplicar</button>
              </div>
              {couponError && <span className="coupon-error">{couponError}</span>}
              {discount > 0 && <span className="coupon-success">Cupom aplicado com sucesso!</span>}
            </div>

            <div className="address-section">
              <h3>Endereço de Entrega</h3>
              <div className="address-form">
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="CEP (somente números)" 
                    value={cep} 
                    onChange={handleCepChange} 
                    maxLength={8}
                  />
                  {isLoadingCep && <span className="loading-cep">Buscando...</span>}
                  {cepError && <span className="coupon-error">{cepError}</span>}
                </div>
                
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Rua" 
                    value={rua} 
                    onChange={(e) => setRua(e.target.value)} 
                  />
                </div>

                <div className="form-row">
                  <input 
                    type="text" 
                    placeholder="Número" 
                    value={numero} 
                    onChange={(e) => setNumero(e.target.value)} 
                    className="input-small"
                  />
                  <input 
                    type="text" 
                    placeholder="Complemento" 
                    value={complemento} 
                    onChange={(e) => setComplemento(e.target.value)} 
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Bairro" 
                    value={bairro} 
                    onChange={(e) => setBairro(e.target.value)} 
                  />
                </div>
              </div>
            </div>

            <div className="cart-totals">
              <div className="total-row">
                <span>Subtotal:</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              {discount > 0 && (
                <div className="total-row discount">
                  <span>Desconto:</span>
                  <span>-{formatPrice(discountValue)}</span>
                </div>
              )}
              <div className="total-row delivery">
                <span>Frete:</span>
                <span>{frete > 0 ? formatPrice(frete) : "Calcular CEP"}</span>
              </div>
              <div className="total-row grand-total">
                <span>Total:</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            <button className="btn btn-checkout" onClick={handleCheckout}>
              Finalizar Pedido pelo WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartModal;

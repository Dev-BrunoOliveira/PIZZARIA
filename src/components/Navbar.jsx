import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

function Navbar({ cartCount, onCartClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">Pizzaria Donatello 🍕</div>
      
      <div className="nav-actions-mobile">
        <button className="cart-btn cart-mobile" onClick={onCartClick}>
          <FaShoppingCart size={20} />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#monte-sua-pizza" onClick={closeMenu}>Montar Pizza</a></li>
        <li><a href="#cardapio" onClick={closeMenu}>Cardápio</a></li>
        <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
        <li className="cart-desktop-wrapper">
          <button className="cart-btn" onClick={onCartClick}>
            <FaShoppingCart size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;

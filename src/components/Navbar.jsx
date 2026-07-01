import { FaShoppingCart } from "react-icons/fa";

function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar">
      <div className="logo">Pizzaria Donatello 🍕</div>
      <ul className="nav-links">
        <li><a href="#monte-sua-pizza">Montar Pizza</a></li>
        <li><a href="#cardapio">Cardápio</a></li>
        <li><a href="#contato">Contato</a></li>
        <li>
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


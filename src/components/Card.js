import "../components/myPages/Women.css";
import "../components/myPages/Men.css";
import "../components/myPages/Kids.css";
import { FaShoppingCart } from 'react-icons/fa';
export default function Card({ item, index, isUser,addToCart }) {
  return (
    <div className="card" key={index}>
      <img
        src={require(`../assets/${item.imgSrc}`)}
        alt={`Dress Image ${index + 1}`}
      />
      <div className="card-details">
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <p>{item.size}</p>
        <p>{item.description}</p>
        {isUser ? (
          <button className="btn" style={{alignItems:"center",color:"white",backgroundColor:"#9a2c67"}} onClick={() => addToCart(item,index)}>
          <FaShoppingCart className="cart-icon" /> Add to Cart
        </button>
        ) : null}
      </div>
    </div>
  );
}

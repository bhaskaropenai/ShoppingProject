import { useCart } from "../../Context/Cartprovider";
import styles from "./cartitem.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
function CartItem({ id, title, quantity, price, img }) {
  const { increaseQty, decreaseQty, removeItemFromCart } = useCart();
  return (
    <div className={styles.cartitem}>
      {/* left-div */}
      <div className={styles.imgandtitle}>
        <div className={styles.imgcontainer}>
          <img src={img} alt={title} className={styles.cartimage} />
        </div>
        <h1>{title}</h1>
      </div>
      {/* right-div */}
      <div className={styles.othercontrols}>
        <div className={styles.qtyinput}>
          <button
            onClick={() => {
              if (quantity === 1) {
                return;
              }
              decreaseQty(id);
            }}
          >
            <AiOutlineMinus />
          </button>
          <span className={styles.quantitydisplay}>{quantity}</span>
          <button
            onClick={() => {
              increaseQty(id);
            }}
          >
            <AiOutlinePlus />
          </button>
        </div>
        <p>&#8377;{price * quantity}</p>
        <button
          className={styles.removeitembtn}
          onClick={() => {
            removeItemFromCart(id);
          }}
        >
          <ImCross />
        </button>
      </div>
    </div>
  );
}

export default CartItem;

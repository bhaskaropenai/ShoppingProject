import React from "react";
import { useCart } from "../../Context/Cartprovider";
import CartItem from "./CartItem";
import styles from "./cart.module.css";

function Cart() {
  const { cart } = useCart();

  const totalamount = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  //   let totalamount = 0;
  //   for (let item of cart) {
  //     totalamount += item.price * item.quantity;
  //     console.log("totalamount", totalamount);
  //   }

  if (cart.length === 0) {
    return <h1>No Item found in the cart</h1>;
  }
  return (
    <div className={styles.cart}>
      <h1 className={styles.cartheading}>Shopping cart</h1>
      <div>
        {cart.map((cartitem) => {
          return <CartItem key={cartitem.id} {...cartitem} />;
        })}
      </div>
      <h1>TotalAmount: &#8377; {totalamount}</h1>
    </div>
  );
}

export default Cart;

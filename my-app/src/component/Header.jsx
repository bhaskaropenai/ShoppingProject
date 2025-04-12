import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Model from "./UI/Model";
import Cart from "./UI/Cart";
import Container from "./UI/Container";
import { useCart } from "../Context/Cartprovider";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
function Header() {
  const { cart } = useCart();
  const totalnum = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  const [isModelopen, setismodelopen] = useState(false);
  function modleclose() {
    setismodelopen(false);
  }
  useEffect(() => {
    if (isModelopen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [isModelopen]);
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <h1>ARC SHOAP</h1>
          <button
            className={styles.showcartbtn}
            onClick={() => {
              setismodelopen(true);
            }}
          >
            <span className={styles.cartIconandNumber}>
              <PiShoppingCartSimpleFill />
              {totalnum > 0 && (
                <span className={styles.number}>{totalnum}</span>
              )}
            </span>
            <span>cart</span>
          </button>
        </nav>
      </Container>
      {isModelopen && (
        <Model modleclose={modleclose}>
          <Cart />
        </Model>
      )}
    </header>
  );
}

export default Header;

import React from "react";
import { useCart } from "../Context/Cartprovider";
import styles from "./product.module.css";
import { toast } from "react-toastify";
function Product({ id, title, img, price }) {
  const { AdditemTocart, cart } = useCart();
  function handleAdd() {
    for (let item of cart) {
      if (item.id === id) {
        toast.error("item alreacy added into cart");
        return;
      }
    }
    const newcartItem = {
      id: id,
      title: title,
      img: img,
      price: price,
      quantity: 1,
    };
    AdditemTocart(newcartItem);
    toast.info("item added to cart");
  }
  return (
    <div className={styles.product}>
      {/* <div>id: {id}</div> */}
      <div>
        <img src={img} alt="title" className={styles.productimage} />
      </div>
      <div className={styles.title}> {title}</div>

      <div className={styles.price}> &#8377;{price}</div>
      <button onClick={handleAdd} className={styles.addtocartbtn}>
        Add to Cart
      </button>
      <br />
      {/* <button> */}
      {/* //   onClick={() => {
      //     if (quantity === 1) {
      //       return;
      //     }
      //     decreaseQty(id);
      //   }}
      // >
      //   <AiOutlineMinus /> */}
      {/* add */}
      {/* </button> */}
    </div>
  );
}

export default Product;

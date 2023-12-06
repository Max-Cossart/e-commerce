import { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import CartItem from "../CartItem/CartItem";

const Cart = ({ cart }) => {
  return (
    <>
      <div className={styles.cart}>
        <div className={styles.cart__header}>
          <span className={styles.cart__item}>Item</span>
          <span className={styles.cart__size}>Size</span>
          <span className={styles.cart__quantity}>Quantity</span>
          <span className={styles.cart__total}>Price</span>
        </div>
      </div>
      <div>
        {cart.map((item) => (
          <CartItem item={item} />
        ))}
      </div>
    </>
  );
};

export default Cart;

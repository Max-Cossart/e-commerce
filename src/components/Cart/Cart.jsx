import { useEffect } from "react";
import styles from "./Cart.module.scss";

const Cart = () => {
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
    </>
  );
};

export default Cart;

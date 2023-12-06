import React from "react";
import styles from "./CartItem.module.scss";

const CartItem = ({ item }) => {
  return (
    <div>
      <img className={styles.image} src={item.imageLink[0]} alt={item.name} />
      <h5>{item.name}</h5>
    </div>
  );
};

export default CartItem;

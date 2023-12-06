import React from "react";
import styles from "./CartItem.module.scss";

const CartItem = ({ item }) => {
  return (
    <section key={item.id} className={styles.cart_item}>
      <div className={styles.item_wrapper}>
        <img className={styles.image} src={item.image} alt={item.name} />
        <h5 className={styles.name}>{item.name}</h5>
      </div>
      <h5 className={styles.size}>{item.size}</h5>
      <div className={styles.quantity}>
        <select className={styles.select} name="" id="">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
          <option value="">10</option>
        </select>
      </div>
      <h5 className={styles.cost}>${item.cost}</h5>
    </section>
  );
};

export default CartItem;

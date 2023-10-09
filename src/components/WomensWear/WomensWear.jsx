import styles from "./WomensWear.module.scss";
import { NavLink } from "react-router-dom";

const WomensWear = ({ data }) => {
  return (
    <section className={styles.section}>
      {data.map((item) => (
        <div key={item.id} className={styles.item_wrapper}>
          <NavLink to={`/item/${item.id}`}>
            <img className={styles.img} src={item.imageLink[0]} />
          </NavLink>
          <h4 className={styles.name}>{item.name}</h4>
          <p className={styles.cost}>${item.cost}</p>
        </div>
      ))}
    </section>
  );
};

export default WomensWear;

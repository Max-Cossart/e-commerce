import Carousel from "../Carousel/Carousel";
import styles from "./ItemPage.module.scss";
import { useParams } from "react-router-dom";

const ItemPage = ({ data, setCart }) => {
  const { id } = useParams();

  const pageData = data.find((item) => item.id === id);

  const addItemToCart = () => {
    setCart(pageData);
  };

  return (
    <section className={styles.item}>
      {data && (
        <>
          <div className={styles.carousel_container}>
            <Carousel data={pageData?.imageLink} />
          </div>
          <div className={styles.info}>
            <h2 className={styles.name}>{pageData?.name}</h2>
            <p className={styles.description}>{pageData?.description}</p>
            <p className={styles.cost}>${pageData?.cost}</p>
            <button onClick={addItemToCart} className={styles.btn}>
              Add to Cart
            </button>
            <div className={styles.sizes}>
              {pageData?.sizes?.map((item) => (
                <div key={item.size} className={styles.size_container}>
                  <input
                    className={styles.radio}
                    type="radio"
                    name="options"
                    id={item.size}
                  />
                  <label htmlFor={item.size} className={styles.size}>
                    {item.size}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ItemPage;

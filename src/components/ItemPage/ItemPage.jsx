import { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import styles from "./ItemPage.module.scss";
import { NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as outlineHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";

const ItemPage = ({ data, addToCart, cart }) => {
  const { id } = useParams();
  const [size, setSize] = useState(null);
  const [error, setError] = useState(null);
  const pageData = data.find((item) => item.id === id);

  const onSubmit = (e) => {
    e.preventDefault();
    if (size === null) {
      setError("Please Select a Size");
    } else {
      addToCart({
        id: pageData.id,
        image: pageData.imageLink[0],
        name: pageData.name,
        cost: pageData.cost,
        size: size,
      });
    }
  };

  const ItemExistsOnCart = () => {
    return cart.find((item) => item.id === id && item.size === size);
  };

  const handleRadio = (e) => {
    setSize(e.target.value);
    setError(null);
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
            <div>
              <p className={styles.cost}>${pageData?.cost}</p>
              <button className={styles.fav_btn}>
                {/* {liked ? (
                  <FontAwesomeIcon icon={fullHeart} />
                ) : (
                  <FontAwesomeIcon icon={outlineHeart} />
                )} */}
              </button>
            </div>

            <form action="">
              <div className={styles.sizes}>
                {pageData?.sizes?.map((item) => (
                  <div key={item.size} className={styles.size_container}>
                    <input
                      required
                      className={styles.radio}
                      type="radio"
                      name="options"
                      id={item.size}
                      value={item.size}
                      onChange={handleRadio}
                    />
                    <label htmlFor={item.size} className={styles.size}>
                      {item.size}
                    </label>
                  </div>
                ))}
              </div>

              {ItemExistsOnCart() ? (
                <NavLink to="/cart">
                  <button className={styles.btn}>View Cart</button>
                </NavLink>
              ) : (
                <button onClick={onSubmit} className={styles.btn}>
                  Add to Cart
                </button>
              )}
              <p className={styles.error_message}>{error}</p>
            </form>
          </div>
        </>
      )}
    </section>
  );
};

export default ItemPage;

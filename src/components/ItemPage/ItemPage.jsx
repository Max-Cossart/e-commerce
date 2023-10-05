import { useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import styles from "./ItemPage.module.scss";
import { useParams } from "react-router-dom";

const ItemPage = ({ data }) => {
  const { id } = useParams();
  // const [pageData, setPageData] = useState([]);

  // useEffect(() => {
  //   setPageData(data.find((item) => item.id === id));
  // }, []);
  const pageData = data.find((item) => item.id === id);

  return (
    <section className={styles.item}>
      <div className={styles.carousel_container}>
        <Carousel data={pageData?.imageLink} />
      </div>
      <div className={styles.info}>
        <h2 className={styles.name}>{pageData?.name}</h2>
        <p className={styles.description}>{pageData?.description}</p>
        <p className={styles.cost}>${pageData?.cost}</p>
        <button className={styles.btn}>Add to Cart</button>
        <div className={styles.sizes}>
          {pageData?.sizes?.map((size) => (
            <p key={size} className={styles.size}>
              {size}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemPage;

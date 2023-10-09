import { useState } from "react";
import styles from "./Carousel.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";

const Carousel = ({ data }) => {
  const [num, setNum] = useState(0);

  const addNum = () => {
    if (num >= data.length - 1) {
      setNum(0);
    } else {
      setNum(num + 1);
    }
  };

  const subtractNum = () => {
    if (num <= 0) {
      setNum(data.length - 1);
    } else {
      setNum(num - 1);
    }
  };

  return (
    <>
      <div className={styles.image_wrapper}>
        {data && (
          <>
            <button className={styles.arrow_left} onClick={subtractNum}>
              <FontAwesomeIcon
                className={styles.arrow}
                icon={faArrowAltCircleLeft}
              />
            </button>
            <img className={styles.image} src={data[num]} alt="" />
            <button className={styles.arrow_right} onClick={addNum}>
              <FontAwesomeIcon
                className={styles.arrow}
                icon={faArrowAltCircleRight}
              />
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Carousel;

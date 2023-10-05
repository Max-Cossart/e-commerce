import styles from "./Landing.module.scss";

import Carousel from "../Carousel/Carousel";

const Landing = ({ data }) => {
  const newData = data.filter(
    (item) =>
      item.id === "1" || item.id === "6" || item.id === "11" || item.id === "16"
  );
  const landingPics = newData.map((item) => item.imageLink[0]);

  return (
    <header className={styles.landing}>
      <h1 className={styles.header}>Browse some of our Collection Below!</h1>
      <Carousel data={landingPics} />
    </header>
  );
};

export default Landing;

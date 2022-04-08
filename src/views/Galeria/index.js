import React from "react";
import Header from "../../Components/Header";
import BannerGaleria from "../../Components/BannerGaleria";
import GaleriaImagens from "../../Components/GaleriaImagens";
import Scroll from "../../Components/Scroll";
import Footer from "../../Components/Footer"
import styles from "./styles.module.css"

export const Galeria = () => {
  return (
    <div className={styles.App}>
      <Header />
      <BannerGaleria />
      <GaleriaImagens />
      <Scroll />
      <Footer />
    </div>
  );
};

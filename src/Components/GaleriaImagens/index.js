import styles from "./styles.module.css";

const GaleriaImagens = () => {
  return (
    <>
      <div className={styles.galeria}>
        <div className={styles.imagem}>
          <img src="assets/1440/galeria1.jpg" alt="" className={styles.img} />
          <h3>Combo 1</h3>
        </div>
        <div className={styles.imagem}>
          <img src="assets/1440/galeria2.png" alt="" className={styles.img} />
          <h3>Donuts Chocolate</h3>
        </div>
        <div className={styles.imagem}>
          <img src="assets/1440/galeria3.jpg" alt="" className={styles.img} />
          <h3>Combo 2</h3>
        </div>
        <div className={styles.imagem}>
          <img src="assets/1440/galeria4.jpg" alt="" className={styles.img} />
          <h3>Combo 3</h3>
        </div>
        <div className={styles.imagem}>
          <img src="assets/1440/galeria5.jpg" alt="" className={styles.img} />
          <h3>Combo 4</h3>
        </div>
        <div className={styles.imagem}>
          <img src="assets/1440/galeria6.jpg" alt="" className={styles.img} />
          <h3>Combo Caixa</h3>
        </div>
        <div className={styles.imagem}>
          <img src="assets/1440/galeria7.jpg" alt="" className={styles.img} />
          <h3>Combo Misto</h3>
        </div>
        <div className={styles.imagem}>
          <img src="assets/1440/galeria8.png" alt="" className={styles.img} />
          <h3>Donuts Brigadeiro</h3>
        </div>
        <div className={styles.imagem}>
          <img src="assets/1440/galeria9.jpg" alt="" className={styles.img} />
          <h3>Donuts Morango</h3>
        </div>
      </div>
    </>
  );
};

export default GaleriaImagens;

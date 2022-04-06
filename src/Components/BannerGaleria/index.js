import styles from "./styles.module.css";

const BannerGaleria = () => {
  return (
    <>
      <div>
        <h1 className={styles.title}>
          Conheça nossos <span style={{ color: "#0E2E3B" }}>Sabores e Combos</span>
        </h1>
      </div>
    </>
  );
};

export default BannerGaleria;

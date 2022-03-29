import styles from "./styles.module.css";
import Box from "@mui/material/Box";

const Main = () => {
  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.mainImage}>
          <img src="/assets/main.png" alt="logo" height="850px" />
        </Box>
        <Box className={styles.main}>
          <p>
            Nossa paixão por Donuts nasceu........ Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sagittis faucibus ullamcorper
            venenatis, vel, imperdiet sociis sollicitudin sed.
          </p>
          <button className={styles.btnSaibaMais}>Saiba mais sobre nós</button>
        </Box>
      </Box>
    </>
  );
};

export default Main;

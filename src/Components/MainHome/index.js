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
          Não inventamos a roda, temos os tradicionais donuts, mas também adaptamos essa deliciosa 
          rosquinha americana com recheios e coberturas brasileiríssimos para fazerem parte da melhor pausa do seu dia!
          </p>
          <button className={styles.btnSaibaMais}>Saiba mais sobre nós</button>
        </Box>
      </Box>
    </>
  );
};

export default Main;

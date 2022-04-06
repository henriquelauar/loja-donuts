import styles from "./styles.module.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box } from "@mui/material";

const Banner = () => {
  return (
    <>
      <Box className={styles.bannerImage}>
        
      </Box>
      <Box className={styles.bannerTitle}>
        <h1 className={styles.bannerTitle1}>A hora mais gostosa do seu dia <span style={{color: '#0E2E3B'}}>é com a gente </span>
        </h1>
      </Box>
      <p className={styles.bannerText}>
        Os Donuts mais deliciosos, fresquinhos e LINDOS! <br/>Sua pausa nunca mais
        será a mesma com a explosão de sabores e cores que produzimos
        diariamente pra você!
      </p>
      <a className={styles.a} href="https://api.whatsapp.com/send?phone=5533988051975&">
        <button className={styles.btnPedido}>
          Faça seu pedido <WhatsAppIcon className={styles.icon} />
        </button>
      </a>
    </>
  );
};

export default Banner;

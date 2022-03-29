import styles from "./styles.module.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box } from "@mui/material";

const Banner = () => {
  return (
    <>
        <Box className={styles.bannerImage}>
          <img
            src="/assets/banner-image.png"
            alt="bannerImage"
            height="767px"
            width="682px"
          />
        </Box>
        <Box className={styles.bannerTitle}>
          <h1 className={styles.bannerTitle1}>Os melhores</h1>
          <h1 className={styles.bannerTitle2}>Donuts</h1>
        </Box>
        <div className={styles.linhaHorizontal}></div>
        <div className={styles.linhaVertical}></div>
        <p className={styles.bannerText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
          faucibus ullamcorper venenatis, vel, imperdiet sociis sollicitudin
          sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
          faucibus ullamcorper venenatis, vel, imperdiet sociis sollicitudin
          sed.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=5533988051975&"
        >
          <button className={styles.btnPedido}>
            Faça seu pedido <WhatsAppIcon className={styles.icon} />
          </button>
        </a>
    </>
  );
};

export default Banner;

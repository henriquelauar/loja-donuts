import styles from "./styles.module.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerTitle}>
        <h1 className={styles.bannerTitle1}>
          A hora mais gostosa do seu dia{" "}
          <span style={{ color: "#0E2E3B" }}>é com a gente </span>
        </h1>
      </div>
      <div className={styles.bannerText}>
        <p>
          Os Donuts mais deliciosos, fresquinhos e LINDOS! <br />
          Seus dias nunca mais serão os mesmos após experimentar a explosão de
          sabores e cores que produzimos diariamente pra você!
        </p>
      </div>
      <div>
        <a
          className={styles.a}
          href="https://api.whatsapp.com/send?phone=5533988051975&"
        >
          <button className={styles.btnPedido}>
            Faça seu pedido <WhatsAppIcon className={styles.icon} />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;

import styles from "./styles.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div></div>
      <div>
        <h4>Redes Sociais</h4>
        <div className={styles.redesIcones}>
          <div className={styles.iconesDiv}>
            <FacebookIcon
              className={styles.icones}
              style={{ fontSize: "26px", color: "#ffffff" }}
            />
          </div>
          <div className={styles.iconesDiv}>
            <InstagramIcon
              className={styles.icones}
              style={{ fontSize: "26px", color: "#ffffff" }}
            />
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <img src="/assets/footer.png" alt="" />
      <div></div>
      <div></div>
      <div>
        <h4>Contato</h4>
        <div className={styles.whatsapp}>
          <WhatsAppIcon style={{ fontSize: "26px", color: "#ffffff" }} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;

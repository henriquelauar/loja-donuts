import styles from "./styles.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <h4>Redes Sociais</h4>
        <FacebookIcon style={{ fontSize: "42px", color: "#ED708E" }} />
        <InstagramIcon style={{ fontSize: "42px", color: "#ED708E" }} />
      </div>
      <img src="/assets/footer.png" alt="" />
      <div>
        <h4>Contato</h4>
        <WhatsAppIcon style={{ fontSize: "42px", color: "#ED708E" }} />
      </div>
    </div>
  );
};

export default Footer;

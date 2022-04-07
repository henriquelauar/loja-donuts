import styles from "./styles.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.redes}>
        <h4>Redes Sociais</h4>
        <FacebookIcon style={{ fontSize: "42px" }} />
      </div>
    </div>
  );
};

export default Footer;

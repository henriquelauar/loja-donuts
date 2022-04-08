import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <p>
        Não inventamos a roda, temos os tradicionais donuts, mas também adaptamos 
        essa deliciosa rosquinha americana com recheios e coberturas brasileiríssimos 
        para fazerem parte da melhor pausa do seu dia!
        </p>
        <Link to="/sobre"><button className={styles.btnSaibaMais}>Saiba mais sobre nós</button> </Link>
      </div>
    </div>
  );
};

export default Main;

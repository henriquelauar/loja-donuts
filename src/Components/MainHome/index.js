import styles from "./styles.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <p>
        Não inventamos a roda, temos os tradicionais donuts, mas também adaptamos 
        essa deliciosa rosquinha americana com recheios e coberturas brasileiríssimos 
        para fazerem parte da melhor pausa do seu dia!
        </p>
        <button className={styles.btnSaibaMais}>Saiba mais sobre nós</button>
      </div>
    </div>
  );
};

export default Main;

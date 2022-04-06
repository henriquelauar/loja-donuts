import styles from "./styles.module.css";

const MainSobre = () => {
  return (
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.title}>
            Sobre <span style={{ color: "#0E2E3B" }}>nós</span>
          </h1>
          <p className={styles.text}>
            Somos apaixonados por Donuts! <br />
            E temos um prazer enorme de levar todo nosso cardápio com uma
            explosão de sabores e combinações até você! <br />
            <br />
            Há 8 anos no mercado, nos especializando sempre, apresentando e
            conquistando o paladar de crianças, jovens e adultos com nossos
            maravilhosos donuts!
          </p>
        </div>
        <div className={styles.text2}>
          <p>
            Não inventamos a roda, temos os tradicionais donuts, mas também
            adaptamos essa deliciosa rosquinha americana com recheios e
            coberturas brasileiríssimos, para fazerem parte da melhor pausa do
            seu dia.
            <br /> <br /> Hoje contamos com 20 pontos de vendas espalhadas por 8
            estados no Brasil repletos de nossos donuts e combinados com a sua
            bebida favorita. Amamos saber que seu dia fica muito mais gostoso
            com a pausa no Donuts Break.
          </p>
        </div>
      </div>
  );
};

export default MainSobre;

import styles from "./styles.module.css";

const MainSobre = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title1}>
          Sobre <span className={styles.title2}>nós</span>
        </h1>
        <p className={styles.text}>
          Somos apaixonados por Donuts! <br />
          E temos um prazer enorme de levar todo nosso cardápio com uma explosão
          de sabores e combinações até você! <br />
          <br />
          Há 8 anos no mercado, nos especializando sempre, apresentando e
          conquistando o paladar de crianças, jovens e adultos com nossos
          maravilhosos donuts!
        </p>
        <div className={styles.imagem1}>
          <img src="/assets/sobre-mao.png" alt="" />
        </div>
        <div className={styles.imagem2}>
          <img src="/assets/2.png" alt="" height="1100px" />
        </div>
        <p className={styles.text2}>
          Não inventamos a roda, temos os tradicionais donuts, mas também
          adaptamos essa deliciosa rosquinha americana com recheios e coberturas
          brasileiríssimos, para fazerem parte da melhor pausa do seu dia.<br/> <br/> Hoje
          contamos com 20 pontos de vendas espalhadas por 8 estados no Brasil
          repletos de nossos donuts e combinados com a sua bebida favorita.
          Amamos saber que seu dia fica muito mais gostoso com a pausa no Donuts
          Break.
        </p>
      </div>
    </>
  );
};

export default MainSobre;
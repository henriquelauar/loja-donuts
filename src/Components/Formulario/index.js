import styles from "./styles.module.css";

const Formulario = () => {
  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.title}>Seja um <span style={{color: "#0E2E3B"}}>franqueado</span></h1>
      </div>
      <div className={styles.text}>
        <p>
        Preencha os campos abaixo e entraremos em contato com 
        todas as informações necessárias para que venha fazer parte da rede de Donuts mais incrível do Brasil.
        </p>
      </div>
      <div className={styles.main}>
        <div>
          <input className={styles.form} placeholder="Nome completo" />
          <input className={styles.form} placeholder="Email" />
          <input className={styles.form} placeholder="Telefone" />
          <input className={styles.form} placeholder="Cidade" />
          <input className={styles.form} placeholder="Estado" />
          <button className={styles.btnFranqueado}>Quero ser franqueado</button>
        </div>
        <div className={styles.formText}>
          <h1 className={styles.formTitle}>Obrigado pela visita!</h1>
          <img src="/assets/donuts.png" alt=""/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Formulario;

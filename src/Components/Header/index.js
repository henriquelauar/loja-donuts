import styles from "./styles.module.css";
import { Link } from "react-router-dom"

const Header = () => {
    return (
      <>
        <div className={styles.navbar}>
          <Link to="/"><img src="/assets/logo.png" height="70px" width="168px" alt="logo" /></Link>
          <Link to="/sobre">Sobre nós</Link> 
          <Link to="/galeria">Galeria</Link> 
          <Link to="/franqueado">Seja um franqueado</Link> 
        </div>
      </>
    );
  };
  
  export default Header;
  
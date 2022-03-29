import styles from "./styles.module.css";
import Box from "@mui/material/Box";

const Header = () => {
    return (
      <>
        <Box className={styles.navbar}>
          <img src="/assets/logo.png" height="70px" width="168px" alt="logo" />
          <h3>Home</h3>
          <h3>Sobre nós</h3>
          <h3>Galeria</h3>
          <h3>Seja um franqueado</h3>
        </Box>
      </>
    );
  };
  
  export default Header;
  
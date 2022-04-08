// import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { push as Menu } from "react-burger-menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

var styles2 = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "320px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#ed708e",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    top: "100px",
    right: "0px",
    height: "100%",
  },
  bmMenu: {
    borderRadius: "50px 0px 0px 50px",
    background: "#0E2E3B",
    padding: "2.5em 1.5em 0",
    fontSize: "18px",
    fontWeight: "500",
    height: "316px",
    width: "300px",
  },

  bmItemList: {
    textDecoration: "none",
    color: "#0E2E3B",
    paddingLeft: '15px',
    paddingBottom: '15px',
  },
  bmOverlay: {
    background: "none",
  },
};

const Header = () => {
  return (
    <>
      <div className={styles.navbarDesktop}>
        <Link to="/">
          <img src="/assets/logo.png" height="70px" width="168px" alt="logo" />
        </Link>
        <Link to="/sobre">Sobre nós</Link>
        <Link to="/galeria">Galeria</Link>
        <Link to="/franqueado">Seja um franqueado</Link>
      </div>

      <div className={styles.navbarMobile}>
        <Link to="/">
          <img src="/assets/375/logo.png" alt="" />
        </Link>
          <Menu styles={styles2}>
            <Link to="/" id="home" className={styles.menuItem}>
              Home
            </Link>
            <Link to="/sobre" className={styles.menuItem}>
              Sobre nós
            </Link>
            <Link to="/galeria" className={styles.menuItem}>
              Galeria
            </Link>
            <Link to="/franqueado" className={styles.menuItem}>
              Seja um franqueado
            </Link>
            <button className={styles.btnPedido}>
              <WhatsAppIcon style={{ fontSize: "12px", marginRight: '10px' }} />
              Faça seu pedido
            </button>
          </Menu>
      </div>
    </>
  );
};

export default Header;

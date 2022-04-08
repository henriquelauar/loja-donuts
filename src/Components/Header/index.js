// import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { push as Menu } from "react-burger-menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

var styles2 = {
  bmBurgerButton: {
    position: 'fixed',
    display: 'flex',
    width: "42px",
    height: "30px",
    right: "20px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#ed708e",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmMenuWrap: {
    paddingTop: '50px',
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
    display: "none",
  },
  bmCrossButton: {
    display: 'none',
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
          <Menu right styles={styles2} >
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

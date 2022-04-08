import React from "react"
import styles from './styles.module.css'
import Header from '../../Components/Header';
import Formulario from "../../Components/Formulario";
import Scroll from "../../Components/Scroll";
import Footer from "../../Components/Footer"

export const Franqueado = () => {
    return (
        <div className={styles.App}>
            <Header />
            <Formulario />
            <Scroll />
            <Footer />
        </div>
    )
} 
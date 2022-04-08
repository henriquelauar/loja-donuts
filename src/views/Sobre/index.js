
import React from "react"
import styles from "./styles.module.css"
import Header from "../../Components/Header"
import MainSobre from "../../Components/MainSobre"
import Scroll from "../../Components/Scroll"
import Footer from "../../Components/Footer"

export const Sobre = () => {
    return (
        <div className={styles.app}>
            <Header />
            <MainSobre />
            <Scroll />
            <Footer />
        </div>
    )
}
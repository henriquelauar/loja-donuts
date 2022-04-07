
import React from "react"
import styles from "./styles.module.css"
import Header from "../../Components/Header"
import MainSobre from "../../Components/MainSobre"
import Footer from "../../Components/Footer"

export const Sobre = () => {
    return (
        <div className={styles.app}>
            <Header />
            <MainSobre />
            <Footer />
        </div>
    )
}
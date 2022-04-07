
import React from "react"
import styles from "./styles.module.css"
import Header from "../../Components/Header"
import MainSobre from "../../Components/MainSobre"

export const Sobre = () => {
    return (
        <div className={styles.app}>
            <Header />
            <MainSobre />
        </div>
    )
}
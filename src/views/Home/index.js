import React from "react"
import Header from '../../Components/Header';
import Banner from '../../Components/BannerHome';
import Main from '../../Components/MainHome'
import CarouselComponent from '../../Components/CarouselHome';
import styles from './styles.module.css'

export const Home = () => {
    return(
        <div className={styles.App} >
            <Header />
            <Banner />
            <Main />
            <CarouselComponent />
        </div>
    )
}
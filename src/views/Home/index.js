import React from "react"
import Header from '../../Components/Header';
import Banner from '../../Components/Banner';
import Main from '../../Components/Main'
import CarouselComponent from '../../Components/Carousel';
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
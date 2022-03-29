import styles from "./styles.module.css";
import { Box } from "@mui/material";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
    return (
      <div className={styles.carouselWrapper}>
      <Carousel >
          <div>
              <img src="/assets/carrossel.jpg" alt="" />
          </div>
          <div>
              <img src="/assets/carrossel2.jpg" alt=""/>
          </div>
          <div>
              <img src="/assets/carrossel3.jpg" alt=""/>
          </div>
      </Carousel>
  </div>
    );
}
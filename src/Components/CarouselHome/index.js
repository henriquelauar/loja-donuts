import styles from "./styles.module.css";
import React from "react";
import Carousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  576: { items: 1 },
  600: { items: 2 },
  1024: { items: 2},
  1365: { items: 3}
};

const items = [
  <img
    src="/assets/1440/carrossel.jpg"
    alt=""
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="/assets/1440/carrossel2.jpg"
    alt=""
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="/assets/1440/carrossel3.png"
    alt=""
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="/assets/1440/carrossel4.jpg"
    alt=""
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="/assets/1440/carrossel5.jpg"
    alt=""
    onDragStart={handleDragStart}
    role="presentation"
  />,
];

export default function CarouselComponent() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Nossos <span className={styles.title2}>Donuts</span>
      </h1>
      <div className={styles.carrossel}>
        <Carousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          autoPlay={true}
          autoPlayInterval={1500}
          animationDuration={1000}
          infinite={true}
        />
      </div>
    </div>
  );
}

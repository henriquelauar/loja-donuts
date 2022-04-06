import styles from "./styles.module.css";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <img
    src="/assets/carrossel.jpg"
    alt=""
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="/assets/carrossel2.jpg"
    alt=""
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="/assets/carrossel3.jpg"
    alt=""

    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="/assets/carrossel4.jpg"
    alt=""
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="/assets/carrossel5.jpg"
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
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </div>
    </div>
  );
}

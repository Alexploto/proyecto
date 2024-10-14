

import React from "react";
import styles from "../styles/Home.module.css";
import { EmblaCarousel } from "./EmblaCarousel";

// Ahora puedes usar Owl Carousel en tu componente

const Maindebuho = () => {
  const OPTIONS = {
    loop: true,
    autoplay: true,
    speed: 5000,
    align: "end",
    draggable: true,
    scrollbar: true,
    pagination: true,
  };
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array().keys());

  return (
    <main className={styles.maindebuho}>
      <div className={styles.parrafo1buho}>
        No apta para los que toman juguito
      </div>
      <div className={styles.parrafo2buho}>
        Incrementa la longevidad y la energia*+++
      </div>
      <div className={styles.Buho}>
        <EmblaCarousel options={OPTIONS} slides={SLIDES} />
      </div>
    </main>
  );
};

export default Maindebuho;

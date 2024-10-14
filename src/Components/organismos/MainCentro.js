

import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const MainCentro = () => {
  return (
    <main className={styles.main}>
      <Image src={"/FondoMain.svg"} fill={true} objectFit={"cover"} />
    </main>
  );
};

export default MainCentro;

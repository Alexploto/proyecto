

import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <div className={styles.containerfooter}>
      <div className={styles.Parrafofooter}>
        <p>
          Le Rope es una empresa dedicada a la venta de indumentaria para adultos y niños
           | @2024 Le Rope
        </p>
      </div>
      <div className={styles.containerContacto}>
        <div className={styles.Face}>
          <InstagramIcon sx={{ width: "21", height: "60", color: "#57ACD0" }} />
          <p className="TextoFace" color="#57ACD0">
           Le Rope
          </p>
        </div>
        <div className={styles.whatsapp}>
          <WhatsAppIcon sx={{ width: "21", height: "60", color: "#57ACD0" }} />
          <p >11-1234-5678</p>
        </div>
        <div className={styles.Map}>
          <LocationOnIcon
            sx={{ width: "20", height: "60", color: "#57ACD0" }}
          />
          <p className="TextoMap">Vte. Lopéz, GBA</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;



import React from "react";
import Image from "next/image";
import CountComponent from "./atomos/CountComponent";
import { useEffect } from "react";

const CartItem = ({ title, description, imageUrl, precio, id }) => {
  useEffect(() => {
    console.log(precio);
  }, []);
  return (
    <section style={estilos.card}>
      <div style={estilos.cardContent}>
        <Image
          src={imageUrl}
          alt={title}
          width={150}
          height={120}
          style={{ objectFit: "cover" }}
        />
        <div style={estilos.cardText}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div style={estilos.counterContainer}>
        <CountComponent precios={precio} id={id} />
      </div>
    </section>
  );
};

export default CartItem;

const estilos = {
  card: {
    backgroundColor: "#000000",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "8px",
    width: "300px",
    marginBottom: "10px",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardText: {
    marginTop: "5px",
  },
  counterContainer: {
    marginTop: "auto",
    paddingTop: "5px",
  },
};

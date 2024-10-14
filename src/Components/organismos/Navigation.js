

import Link from "next/link";
import NombreEmpresa from "./NombreEmpresa";
import Login from "./Login";
import Registrarme from "./Registrarme";

import styles from "../styles/Home.module.css";
import Burguer from "./Burguer";
import Image from "next/image";
import ShoppingCart from "./Carrito";

function Navigation() {
  return (
    <header className={styles.header}>
      <div className={styles.containerLogo}>
        <Image src="Logo.svg" width={80} height={80} alt="logo" />
        <Image
          src="NombreEmpresa.svg"
          width={100}
          height={100}
          alt="nombre de la empresa"
        />
      </div>

      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="./Indumentaria">Indumentaria</Link>
        <Link href="./Contactanos">Contactanos</Link>
        <Link href="/Nosotrospage">Nosotros</Link>
        <Link href="./TiendaOnLineScreen">TiendaOnLine</Link>
      </nav>

      <div className={styles.Burguer}>
        <Burguer />
      </div>

      <div className={styles.Login}>
        <Login />
      </div>

      <div className={styles.Registrarme}>
        <Registrarme />
      </div>

      <div className={styles.Carrito}>
        <ShoppingCart />
      </div>
    </header>
  );
}

export default Navigation;

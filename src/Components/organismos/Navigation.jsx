

import React from 'react'

//NEXT.JS
import Link from 'next/link'

// SCREENS
import Logo from './Logo'
import NombreEmpresa from './NombreEmpresa'
import Login from './Login'
import Registrarme from './Registrarme'
import Carrito from './Carrito'


const Navigation = () => {
    return (
        <>
            <div className='logo'>
             <Logo/>
            </div>
            <div className='NombreEmpresa'>
             <NombreEmpresa/>   
            </div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/">Indumentaria</Link>
                <Link href="/">Contactanos</Link>
                <Link href="/">Nosotros</Link>
                <Link href="/">TiendaOnLine</Link>
            </nav>
            <div className='Login'>
             <Login/>
            </div>
            <div className='Registro'>
             <Registrarme/>
            </div>
            <div className='Carrito'>
             <Carrito/>
            </div>
      
      </>
      
  )
}

export default Navigation
import'./header.css'
import React from 'react'
import logo from './logo.png'
export default function Heder() {
    return(
        <div className="header">
            
            <div className='logo'>
                <img  src={logo} alt="Logo"/>
            </div>

            <div className="links">
             <a>Inicio</a>
             <a>Tabelas</a>
             <a>Regras</a>
            </div>

            <div>
                <a>USUARIO</a>
            </div>
        </div>
    )}
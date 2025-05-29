import'./header.css'
import React from 'react'
import logo from './logo.png'
import Tabela from '../tabela/tabela.jsx';
import { Link } from 'react-router-dom'
export default function Heder() {
    return(
        <div className="header">
            
            <div className='logo'>
                <img  src={logo} alt="Logo"/>
            </div>

            <div className="links">
            
        
                <Link to={"/"}>Inicio</Link>
                <Link to={"/tabela"}>Tabela</Link>
                
            
             <a>Regras</a>
            </div>

            <div>
                <a>USUARIO</a>
            </div>
        </div>
    )}
import'./header.css'
import logo from './logo.png'
import { Link } from 'react-router-dom'
export default function Heder() {
    return(
        <div className="header">
            
            <div className='logo'>
                <img  src={logo} alt="Logo"/>
            </div>

            <div className="links">
            
        
                <Link to={"/home"}>Inicio</Link>
                <Link to={"/tabela"}>Tabela</Link>
                
            
             <a>Regras</a>
            </div>

            <div className='us'>
                <a>USUARIO</a>
            </div>
        </div>
    )}
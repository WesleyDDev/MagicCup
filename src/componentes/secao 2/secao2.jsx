import './secao2.css'
import { useState,useEffect } from 'react'
import api from '../../api/api'

export default function Secao2(){
    
    const [card, setCard] = useState([])
    useEffect(() =>{
        async function LoadCards(){
            const response = await api.get('/cards')
            console.log(response.data.cards)
            setCard(response.data.cards)
            
        }LoadCards()
    },[])
    
    
    
    
    return(
        
        <div className='secao2'>
            <imput>dfsd</imput>
                {card.map(cartao => (
                    <div className='secaocard'>
                        <h1 key={cartao.id}>{cartao.name}</h1>
                        <img src={cartao.imageUrl}></img>
                        <div>{cartao.text}</div>
                    </div>
                ))}
               
  
            
          
           
        </div>
    )
}





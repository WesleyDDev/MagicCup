import './pesquisa.scss'
import { useState,} from 'react'
import axios from 'axios'



export default function Pesquisa(){

    

        const [nomecarta, setNomecarta] = useState("")
        const[card, Setcard] = useState([])


        const buscarcard = async () =>{
            if (!nomecarta.trim())return 

            const resposta = await axios.get("https://api.magicthegathering.io/v1/cards", {
        params: { name: nomecarta }});

 
      Setcard(resposta.data.cards)
      console.log(card);

    }

    return(
        <div className='pesquisa'>

           <div className='pesquisa1'> <h1>- ORÁCULO -</h1>
           <h2>Sistema de Busca de Cartas de Magic  Rápido e Preciso</h2></div>
           
           <div><input type="text"
                    placeholder="Digite o nome da carta"
                    value={nomecarta}
                    onChange={(e) => setNomecarta(e.target.value)}>
                    
            </input>
            <button onClick={buscarcard}>Buscar</button></div> 
            <div className='res'>
                {card.map((carta) => (
                 <div className='card'> 
                     <div className='info'>
                            <img src={carta.imageUrl} alt='imagem'></img>
                            
                    </div>
                            <div className='info1'>
                        <h1 key={carta.id}> {carta.name}</h1>
                                <p>{carta.text}</p>
                             </div>
                
                </div>    
                ))}

            </div>
        </div>
    );



    
    






    
}
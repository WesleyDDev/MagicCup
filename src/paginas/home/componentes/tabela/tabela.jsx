import './tabela.scss'
import Video from './video1.mp4';


export default function Tabela(){
    return(
        <div className='tabela'>
            <video src={Video} autoPlay loop></video>

            <div className='tabela1'>
                <h1>Tabela</h1>

                 <div className='tabela2-1'>
                        <div><h1>Jogador</h1></div>
                        <div><h1>Vitorias</h1></div>
                        <div><h1>Mortes</h1></div>
                        <div><h1>Pontos</h1></div>
                    </div>
                
                    <div className='tabela2'>
                        <div><h1>wesley</h1></div>
                        <div><h1>2</h1></div>
                        <div><h1>4</h1></div>
                        <div><h1>6</h1></div>
                    </div>

                    
                
                    <div className='tabela2'>
                        <div><h1>wesley</h1></div>
                        <div><h1>2</h1></div>
                        <div><h1>4</h1></div>
                        <div><h1>6</h1></div>
                    </div>
                    
                    

            </div>
        </div>
    )};
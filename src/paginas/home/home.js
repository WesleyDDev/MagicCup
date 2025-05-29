import Header from'./componentes/header/header';
import Pesquisa from'./componentes/pesquisa/pesquisa';
import Secao1 from'./componentes/secao1/secao1';
import Tabela from './componentes/tabela/tabela';


export default function Home(){
    return(
        <div>
            <Header/>
            <Secao1/>
            <Pesquisa/>
            <Tabela/>
        </div>
    )
}
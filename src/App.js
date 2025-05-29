import './App.css';
import Home from './paginas/home/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Tabela from './paginas/tabela/tabela';
import Heder from './paginas/home/componentes/header/header';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Heder/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/tabela' element={<Tabela/>}/>
        </Routes>
      </BrowserRouter>
        
      
    </div>
  );
}

export default App;

import './App.css';
import Login from'./paginas/login/login';
import Home from './paginas/home/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Tabela from './paginas/tabela/tabelap';
import Heder from './paginas/home/componentes/header/header';


function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/tabela' element={<Tabela/>}/>
        </Routes>
      </BrowserRouter>
        
      
    </div>
  );
}

export default App;

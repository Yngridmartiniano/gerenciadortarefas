import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './componentes/Header';
import Footer from './componentes/Footer';

import Home from './paginas/Home';
import Contato from './paginas/Contato';
import Sobre from './paginas/Sobre';
import ListarUmaTarefa from './paginas/ListarUmaTarefa';
import ListarTarefas from './paginas/Home/ListarTarefas';
import CadastrarTarefas from './paginas/CadastrarTarefas';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/tarefa" element={<ListarTarefas />}/>
          <Route path="/tarefa/:id" element={<ListarUmaTarefa />}/>
          <Route path="/cadastarTarefa" element={<CadastrarTarefas />}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homem from './Components/Homem/Homem.jsx';
import Mulher from './Components/Mulher/Mulher.jsx';
import Perfil from './Components/PerfilUsuario/perfil.jsx';
import DadosPerfil from './Components/PerfilUsuario/DadosPerfil/index.jsx';
import MinhasCompras from './Components/PerfilUsuario/MinhasCompras/index.jsx';
import MeusProdutos from './Components/PerfilUsuario/MeusProdutos/index.jsx';
import Favoritos from './Components/PerfilUsuario/Favoritos/index.jsx';
import Pagamento from './Components/PerfilUsuario/Pagamento/index.jsx';
import Configuracoes from './Components/PerfilUsuario/Configuracoes/index.jsx';
import Ajuda from './Components/PerfilUsuario/Ajuda/index.jsx';
import Login from './Components/Login/Login.jsx';
import Cadastro from './Components/Cadastro/Cadastro.jsx';
import Cesta from './Components/Produto/produto.jsx';
import Carrinho from './Components/Carrinho/carrinho.jsx'
import CadastroLoja from './Components/CadastroLoja/CadastroLoja.jsx'
import LoginLoja from './Components/LoginLoja/LoginLoja.jsx';
import './App.css';






const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/carrinho" element={<Carrinho/>}/>
          <Route path="/produto" element={<Cesta/>}/>
          <Route path="/feminina" element={<Mulher />}/>
          <Route path="/"exact element={<Homem />}/>
          <Route path="/login" element={<LoginLoja />}/>
          <Route path="/cadastro" element={<Cadastro />}/>
          <Route path="/perfil" element={<Perfil />}>
            <Route index element={<DadosPerfil />}/>
            <Route path="minhas-compras" element={<MinhasCompras />}/>
            <Route path="meus-produtos" element={<CadastroLoja />}/>
            <Route path="favoritos" element={<Favoritos />}/>
            <Route path="pagamentos" element={<Pagamento />}/>
            <Route path="configuracoes" element={<Configuracoes />}/>
            <Route path="ajuda" element={<Ajuda />}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
      
    );
}

export default App
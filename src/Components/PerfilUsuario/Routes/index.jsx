import React from "react";
import { Routes, Route } from "react-router-dom";
import DadosPerfil from "../DadosPerfil";
import MinhasCompras from "../MinhasCompras";
import MeusProdutos from "../MeusProdutos"
import Favoritos from "../Favoritos"
import Pagamento from "../Pagamento"
import Configuracoes from "../Configuracoes"
import Ajuda from "../Ajuda"

function RotasPerfil() {
    return(
        <Routes>
            {/* <Route path="/perfil/dados" element={<DadosPerfil />}/>
            <Route path="/perfil/minhas-compras" element={<MinhasCompras />}/>
            <Route path="/perfil/meus-produtos" element={<MeusProdutos />}/>
            <Route path="/perfil/favoritos" element={<Favoritos />}/>
            <Route path="/perfil/pagamentos" element={<Pagamento />}/>
            <Route path="/perfil/configuracoes" element={<Configuracoes />}/>
            <Route path="/perfil/ajuda" element={<Ajuda />}/> */}
        </Routes>
    )
}

export default RotasPerfil;
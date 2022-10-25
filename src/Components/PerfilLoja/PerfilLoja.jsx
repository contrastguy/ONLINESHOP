import React from "react";
import { Outlet } from "react-router-dom";
import TopicosPerfilLoja from "./TopicosPerfil/index";
import RotasPerfil from "./Routes";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

function PerfilLoja() {
    return(
        <div>
            <NavBar />
            {/* Coloca o componente que posssui as rotas */}
            {/* Renderiza o filho das rotas da Topicos Perfil Loja */}
                <div className='d-flex'>
                    <TopicosPerfilLoja />
                    <Outlet />
                </div>
            <Footer />
        </div>
    )
}

export default PerfilLoja;
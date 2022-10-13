import React from "react";
import "../styles.css";
import FotoPerfil from "./imagens/foto-perfil.jpg";
import { Nav } from "react-bootstrap";
import { NavLink as Navigator } from "react-router-dom";



function TopicosPerfilLoja() {
    return(
        <div className="col-3 bg-light text-center pt-4 pb-4 mb-3 ps-2 pe-2 shadow-lg">
            <div className="pb-3">
                <img src={FotoPerfil} alt="" className="fotoPerfil mb-3"/>
                <Nav.Link to="/perfil" as={Navigator}><h3 className="link-secondary cursor ">Nome Loja</h3></Nav.Link>
            </div>
            <Nav.Link to="/perfil-loja/meus-produtos" as={Navigator}>
                <button className="btn btn-danger col-12 shadow-lg radius-0">Meus Produtos</button>
            </Nav.Link>
            <Nav.Link to="/perfil-loja/pagamentos" as={Navigator}>
                <button className="btn btn-danger col-12 shadow-lg radius-0">Pagamento</button>
            </Nav.Link>
            <Nav.Link to="/perfil-loja/configuracoes" as={Navigator}>
                <button className="btn btn-danger col-12 shadow-lg radius-0">Configurações</button>
            </Nav.Link>
            <Nav.Link to="/perfil-loja/ajuda" as={Navigator}>
                <button className="btn btn-danger col-12 shadow-lg radius-0">Ajuda</button>   
            </Nav.Link>            
        </div>    
    )
}

export default TopicosPerfilLoja;
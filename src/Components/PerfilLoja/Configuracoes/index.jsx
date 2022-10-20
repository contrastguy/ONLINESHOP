import React from "react";
import "../styles.css";
import { Button } from "react-bootstrap";
import EnderecoLoja from "./EnderecoLoja";
import Contatoloja from "./ContatoLoja";


function ConfiguracoesLoja() {
    return(
            <div className="col-9 overflow-auto altura">
                <div className="d-flex justify-content-center align-content-center m-5 border-bottom">
                    <h1 className="pb-3 link-secondary">Configurações</h1>
                </div>
                <div className="d-flex container justify-content-around h-50">
                    <div className="">   
                    <EnderecoLoja />
                    <Contatoloja />
                    </div>
                    
                </div>
            </div>
    )
}

export default ConfiguracoesLoja;
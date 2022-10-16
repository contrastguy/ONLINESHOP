import React from "react";
import "../styles.css";
import {Button} from 'react-bootstrap'

function Configuracoes() {
    return(
        <div className="col-9 overflow-auto altura">
            <div className="d-flex justify-content-center align-content-center m-5 border-bottom">
                <h1 className="pb-3 link-secondary">Configurações</h1>
            </div>
            <div className="d-flex container justify-content-around h-50">
                <div className="">   
                    <Button variant="outline-secondary" className="btn-md">Atualizar informações de     
                        endereço</ Button>{' '}
                    <Button variant="outline-secondary">Atualizar informações de contato</Button>{' '}
                </div>
                
            </div>
        </div>
    )
}

export default Configuracoes;
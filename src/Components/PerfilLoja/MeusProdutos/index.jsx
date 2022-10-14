import React from "react";
import "../styles.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';

function MyVerticallyCenteredModal(props) {
  
  const { register, handleSubmit, formState:{ erros } } = useForm()
  
  const adicionarProduto = data => console.log(data)
  
  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Cadastrar novo produto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <main>
            <div className="card-post">
              <form onSubmit={handleSubmit(adicionarProduto)}>
                <div className='campo'>
                    <label htmlFor="nome-produto"><h5>Nome do produto</h5></label>
                    <input type="text" name="nome" {... register("nome")} /> 
                </div>
                <div className="selecionar">
                  <h5>Gênero</h5>
                  <select name="genero" id="">
                    <option value="0" id='0'name="null" {... register("null")}>-</option>
                    <option value="1" id='1'name="1" {... register("1")}>Masculino</option>
                    <option value="2" id='2'name="2" {... register("2")}>Feminino</option>
                  </select>
                </div>
                <div className="selecionar">
                  <h5>Seção</h5>
                  <select name="" id="">
                    <option value="0" id='0' name="null" {... register("null")}>-</option>
                    <option value="1" id='1' name="1" {... register("1")}>Adulto</option>
                    <option value="2" id='2' name="2" {... register("2")}>Teen</option>
                    <option value="3" id='3' name="3" {... register("3")}>Infantil</option>
                  </select>
                </div>
                <div className="selecionar">
                  <h5>Categoria</h5>
                  <select name="" id="">
                    <option value="0" id='0'>-</option>
                    <option value="1" id='1'>Roupa</option>
                    <option value="2" id='2'>Acessório</option>
                    <option value="3" id='3'>Calçado</option>
                    <option value="4" id='4'>Chapéu</option>
                    <option value="5" id='5'>Óculos</option>
                  </select>
                </div>
                <div className="selecionar">
                  <h5>Estilo</h5>
                  <select name="" id="">
                    <option value="0" id='0'>-</option>
                    <option value="1" id='1'>Casual</option>
                    <option value="2" id='2'>Elegante</option>
                    <option value="3" id='3'>Clássico</option>
                    <option value="4" id='4'>Vintage</option>
                    <option value="5" id='5'>Street</option>
                    <option value="6" id='6'>Tradicional</option>
                  </select>
                </div>
                <div className="campo">
                  <label htmlFor="cor-produto"><h5>Cor</h5></label>
                    <input type="text" />
                </div>
                <div className="quantidade">
                  <h5>Quantidade de Estoque</h5>
                  <input type="number" />
                </div>
                <div className="campo">
                  <label htmlFor="tamanho"><h5>Tamanho:</h5></label>
                    <input type="text" />
                </div>
                <div className="valor">
                  <h5>Valor</h5>
                  <input type="number" />
                </div>
                <div className="imagem">
                  <h5>Adicionar imagem</h5>
                  <input type="file" />
                </div>
                <div className="text">
                  <h5>Descrição</h5>
                  <textarea type="text" />
                </div>
              </form>
            </div>
          </main>
         
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit'>Salvar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  



function MeusProdutosLoja() {
    const [modalShow, setModalShow] = React.useState(false);
    
    return(
            <div class="col-9 overflow-auto altura">
                <div class=" d-flex justify-content-center align-content-center m-5 border-bottom">
                    <h1 class="pb-3 link-secondary">Meus Produtos</h1>
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <div class="col-11 overflow-auto">
                        <div class="d-flex border-bottom pb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="link-secondary me-3 bi bi-emoji-frown" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                              </svg>
                              <h6>Voçê não publicou nenhum produto ainda.</h6>
                        </div>
                        <div class=" d-flex justify-content-center mt-5 pb-5 ">
                            <button class="btn btn-primary w-25 radius-0" onClick={() => setModalShow(true)}>Publicar Produto</button>
                        </div>

                    <div class="d-flex justify-content-center link-secondary pt-4 border-bottom"> 
                        <h2 class="pb-3">Minhas Vendas</h2>
                    </div>
                    <div class="d-flex border-bottom pb-3 pt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="link-secondary me-3 bi bi-emoji-frown" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                          </svg>
                          <h6>Voçê não vendeu nenhum produto ainda.</h6>
                    </div>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />  
                    </div>
                </div>

            </div>
    )
}

export default MeusProdutosLoja;
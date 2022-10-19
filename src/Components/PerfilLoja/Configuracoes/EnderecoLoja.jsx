import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ApiEnderecoLojaCadastro } from '../../Services/apiLoja';

export default function EnderecoUsuario() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [local, setLocal] = useState('')
  const [cep, setCep]= useState('')
  const [cidade, setCidade]= useState('')
  const [logradouro, setLogradouro]= useState('')
  const [rua, setRua]= useState('')
  const [numero, setNumero]= useState('')

  function CadastrarEndereco(){
    ApiEnderecoLojaCadastro({ cep, cidade, logradouro, rua, numero})
    .then((res)=>{console.log(res)})
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <>
      <Button variant="outline-secondary" className="btn-md" onClick={()=>{setShow(true)}}>
        Atualizar informações de endereço</ Button>{' '}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar endereço</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" value={cep} onChange={(e)=>{setCep(e.target.value)}}>
              <Form.Label>CEP</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" value={cidade} onChange={(e)=>{setCidade(e.target.value)}}>
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                type="text"
                placeholder="São Paulo"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" value={logradouro} onChange={(e)=>{setLogradouro(e.target.value)}}>
              <Form.Label>Bairro</Form.Label>
              <Form.Control
                type="text"
                placeholder="Jardim Peri"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" value={rua} onChange={(e)=>{setRua(e.target.value)}}>
              <Form.Label>Rua</Form.Label>
              <Form.Control
                type="text"
                placeholder="Rua: Oscar Mori"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" value={numero} onChange={(e)=>{setNumero(parseInt(e.target.value))}}>
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="225"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={()=>{CadastrarEndereco()}}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

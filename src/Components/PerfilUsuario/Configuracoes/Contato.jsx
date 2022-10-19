import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ApiContatoCadastro } from '../../Services/apiLoja';

export default function ContatoUsuario() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [celular, setCelular1] = useState('')
  const [titular_celular, setTitularCelular]= useState('')
  const [telefone_fixo, setTelefoneFixo]= useState('')
  const [titular_telefone_fixo, setTitularTelefoneFixo]= useState('')
  const [instagram, setInstagram]= useState('')
  const [facebook, setFacebook]= useState('')
  const [linkedin, setLinkedin]= useState('')

  function eventhandleCadastrarContato(){
    ApiContatoCadastro({celular, titular_celular, telefone_fixo, titular_telefone_fixo, instagram, facebook, linkedin})
    .then((response)=>{console.log(response)})
    .catch((error)=>{
      console.log(error)}) 
  }
  

  return (
    <>
      <Button variant="outline-secondary" onClick={()=>{setShow(true)}}>Atualizar informações de contato</Button>{' '}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Contato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" value={celular} onChange={(e)=>{setCelular1(parseInt(e.target.value))}}>
              <Form.Label>Celular 1</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" value={titular_celular} onChange={(e)=>{setTitularCelular(parseInt(e.target.value))}}>
              <Form.Label>Celular 2</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" value={telefone_fixo} onChange={(e)=>{setTelefoneFixo(parseInt(e.target.value))}}> 
              <Form.Label>Telefone Residencial</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" value={titular_telefone_fixo} onChange={(e)=>{setTitularTelefoneFixo(parseInt(e.target.value))}}>
              <Form.Label>Telefone Comercial</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" value={instagram} onChange={(e)=>{setInstagram(e.target.value)}}>
              <Form.Label>Instagram</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" value={facebook} onChange={(e)=>{setFacebook(e.target.value)}}> 
              <Form.Label>Facebook</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" value={linkedin} onChange={(e)=>{setLinkedin(e.target.value)}}>
              <Form.Label>LinkedIn</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={()=>{eventhandleCadastrarContato()}}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

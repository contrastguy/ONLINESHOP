import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function CadastrarProduto() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div class=" d-flex justify-content-center mt-5 pb-5 ">
        <button onClick={handleShow} class="btn btn-primary w-25 radius-0">Publicar Produto</button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome do produto</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <div className=' d-flex'>
            <Form.Select aria-label="Default select example">
              <option>Gênero</option>
              <option value="1">Masculino</option>
              <option value="2">Feminino</option>
            </Form.Select>
            <Form.Select aria-label="Default select example">
              <option>Seção</option>
              <option value="1">Adulto</option>
              <option value="2">Teen</option>
              <option value="3">Infantil</option>
            </Form.Select>
            <Form.Select aria-label="Default select example">
              <option>Categoria</option>
              <option value="1" id='1'>Roupa</option>
              <option value="2" id='2'>Acessório</option>
              <option value="3" id='3'>Calçado</option>
              <option value="4" id='4'>Chapéu</option>
              <option value="5" id='5'>Óculos</option>
            </Form.Select>
            <Form.Select aria-label="Default select example">
              <option>Estilo</option>
              <option value="1" id='1'>Casual</option>
              <option value="2" id='2'>Elegante</option>
              <option value="3" id='3'>Clássico</option>
              <option value="4" id='4'>Vintage</option>
              <option value="5" id='5'>Street</option>
              <option value="6" id='6'>Tradicional</option>
            </Form.Select>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Cor</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Quantidade de Estoque</Form.Label>
              <Form.Control
                type="number"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tamanho</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                placeholder='Ex: M'
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Preço</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                placeholder='Ex: 25.90'
              />
            </Form.Group>       
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descrição</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleClose}>
            Salvar 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CadastrarProduto;
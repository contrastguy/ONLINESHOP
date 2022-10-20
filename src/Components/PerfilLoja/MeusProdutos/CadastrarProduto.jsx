import { getValue } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ApiProdutoCadastro } from '../../Services/apiLoja';





function CadastrarProduto() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [nome, setNome] = useState('')
  const [genero_produto_id, setGenero_produto_id]= useState('')
  const [secao_produto_id, setSecao_produto_id]= useState('')
  const [categoria_id, setCategoria_id]= useState('')
  const [estilo_id, setEstilo_id]= useState('')
  const [cor_produto, setCor_produto]= useState('')
  const [qtd_estoque, setQtd_estoque]= useState('')
  const [tamanho_produto, setTamanho_produto]= useState('')
  const [valor, setValor]= useState('')
  const [img_produto, setImg_produto]= useState('')
  const [descricao, setDescricao]= useState('')
  
  const loja_id = localStorage.getItem("loja_id")

  
  function eventHandleCadastrarProduto(){
    ApiProdutoCadastro({loja_id,nome, genero_produto_id, secao_produto_id, categoria_id, estilo_id, cor_produto, qtd_estoque, tamanho_produto, valor, img_produto, descricao})
    .then((response)=>{
      alert('Produto cadastrado com sucesso')})
    .catch((error)=>{
    console.log(error)}) 
    
    
  }

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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"value={nome} onChange={(e)=>{setNome(e.target.value)}} >
              <Form.Label>Nome do produto</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <div className=' d-flex'>
            <Form.Select aria-label="Default select example" value={genero_produto_id} onChange={(e)=>{setGenero_produto_id(e.target.value)}} required >
              <option>Gênero</option>
              <option value="1">Masculino</option>
              <option value="2">Feminino</option>
            </Form.Select>
            <Form.Select aria-label="Default select example" value={secao_produto_id} onChange={(e)=>{setSecao_produto_id(e.target.value)}} required>
              <option>Seção</option>
              <option value="1">Adulto</option>
              <option value="2">Teen</option>
              <option value="3">Infantil</option>
            </Form.Select>
            <Form.Select aria-label="Default select example" value={categoria_id} onChange={(e)=>{setCategoria_id(e.target.value)}} required>
              <option>Categoria</option>
              <option value="1" id='1'>Roupa</option>
              <option value="2" id='2'>Acessório</option>
              <option value="3" id='3'>Calçado</option>
              <option value="4" id='4'>Chapéu</option>
              <option value="5" id='5'>Óculos</option>
            </Form.Select>
            <Form.Select aria-label="Default select example" value={estilo_id} onChange={(e)=>{parseInt(setEstilo_id(e.target.value))}} required>
              <option>Estilo</option>
              <option value="1" id='1'>Casual</option>
              <option value="2" id='2'>Elegante</option>
              <option value="3" id='3'>Clássico</option>
              <option value="4" id='4'>Vintage</option>
              <option value="5" id='5'>Street</option>
              <option value="6" id='6'>Tradicional</option>
            </Form.Select>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" value={cor_produto} onChange={(e)=>{setCor_produto(e.target.value)}}>
              <Form.Label>Cor</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" value={qtd_estoque} onChange={(e)=>{setQtd_estoque(parseInt(e.target.value))}}>
              <Form.Label>Quantidade de Estoque</Form.Label>
              <Form.Control
                type="integer"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" value={tamanho_produto} onChange={(e)=>{setTamanho_produto(e.target.value)}}>
              <Form.Label>Tamanho</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                placeholder='Ex: M'
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" value={valor} onChange={(e)=>{setValor(parseFloat(e.target.value))}}>
              <Form.Label>Preço</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                placeholder='Ex: 25.90'
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formFileMultiple" value={img_produto} onChange={(e)=>{setImg_produto(e.target.value)}}>
              <Form.Label>Adicionar imagem</Form.Label>
              <Form.Control
                type="file"
                autoFocus
              />
              </Form.Group>       
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              value={descricao} onChange={(e)=>{setDescricao(e.target.value)}}
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
          <Button variant="success" onClick={()=>{eventHandleCadastrarProduto()}}>
            Salvar 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CadastrarProduto;
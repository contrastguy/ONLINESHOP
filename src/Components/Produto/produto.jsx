import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import Camisa from '../Homepage/Homem/Imagens/Camisa-preta.jpg'
// import Jaqueta from "../Homepage/Homem/Imagens/Jaqueta.jpg"
// import Moletom from "../Homepage/Homem/Imagens/Moletom-branco.jpg"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import NavBar from '../NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import DolceGabbana from "../Mulher/Imagens/17528762_37436785_600.jpg"


import './CSS/styles.css'







export default function Cesta() {
  const [listaProdutos, setListaProdutos] = useState([])
  const [qtd, setQtd] = useState(0)
  const [usuario_id,setUsuario_id] = useState(1)
  const [total,setTotal] = useState(Number)
 


  const navigateCarrinho = useNavigate("/carrinho")
  const titulo = JSON.stringify(listaProdutos.map((e) => { return e.nome }))
  const nome = titulo.replace("[", "").replace("]", "").replace(/"/g ,'')
  const preco = JSON.stringify(listaProdutos.map((e) => { return e.valor })).replace("[", "").replace("]", "")
  const tamanho = JSON.stringify(listaProdutos.map((e) => { return e.tamanho_produto })).replace("[", "").replace("]", "").replace(/"/g ,'')
  const num = parseFloat(preco)


  

  useEffect(
    () => {
      // alert("To do : chamar APi rota que pega lista de produtos e add response no state listaProdutos")
    //   ProdutosMulher().then(
    //     (response) => {
    //       console.log(response.data)
    //       const dados = response.data
    //       setListaProdutos(dados)

    //     }
    //   ).catch((error) => { console.log(error) })
    
    // }, [])
    // function  CadastroVendaCarrinho(){
    //   CadastroVenda({usuario_id,total}).then(
    //     (response) => {
    //       const  dados = response.data
    //       console.log(dados)
    //       alert("Funcionou")}
    //   ).catch(
    //     (error)=>{console.log(error)}
    //   )
    }
    

  //   function verificarTamanho(value){

  //     if(tamanho === value){
  //       return alert("Esse tamanho está disponível")
  //     }else{
  //       return alert("Esse tamanho não está disponível")
  //     }

  // } 
  )
   

  return (
    <>
      <NavBar />
      <div className='body'>

        <div className='cesta shadow-lg p-4 col-11 bg-light'>
          <div className='info-imagem col-5'>
            <div className=''>
              <Carousel variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-carousel"
                    src={DolceGabbana}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-carousel"
                    src={DolceGabbana}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-carousel"
                    src={DolceGabbana}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className='mostruario col-6 pt-5'>
              <img className='item-mostruario' src={DolceGabbana} alt="" />
              <img className='item-mostruario' src={DolceGabbana} alt="" />
              <img className='item-mostruario' src={DolceGabbana} alt="" />
            </div>
          </div>

          <div className='info-produto col-4 p-4 border-start'>
            <div className='d-flex justify-content-between'>
              <h3 className='link-secondary'>Produto</h3>
              <h2>{nome}</h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="link-primary bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
            </div>
            <h1>{"R$ " + num + ",00"}</h1>
            <div className='col-5 d-flex justify-content-between'>
              <h4>Tamanho: </h4>
              <ButtonGroup className="mb-2">
                <Button value={"P"} onClick={(e)=>{
                  const valor = e.target.value
                  // verificarTamanho(valor)
                }}>P</Button>
                <Button value={"M"} onClick={(e)=>{
                  const valor = e.target.value
                  // verificarTamanho(valor)
                }}>M</Button>
                <Button value={"G"} onClick={(e)=>{
                  const valor = e.target.value
                  // verificarTamanho(valor)
                }}>G</Button>
              </ButtonGroup>
            </div>
            <div className='d-flex'>
              <h5>Quantidade:</h5>
              <input onChange={(event) => { setQtd(event.target.value) }} type="number" className='ms-2 col-2' />
            </div>
            <div className='dropdown d-flex'>
              <h5 className='me-2'>Cor :</h5>
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle split variant="" id="dropdown-split-basic" />
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Branco</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Preto</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Vermelho</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className='col-3 resumo p-4 border-start ps-4'>
            <h3 className='link-secondary pt-3'>Resumo do Pedido</h3>
            <h5>{qtd + " produto(s)"}</h5>
            <div className='d-flex align-items-end '>
              <h5 className='pe-3'>Total:</h5>
              <h3 onChange={(e)=>{setTotal(e.target.value)}}>{(num * qtd) + ",00"}</h3>
            </div>
            <Button onClick={()=>{
              // CadastroVendaCarrinho()
              navigateCarrinho("/carrinho")
            }} className='comprar btn btn-success'>Adicionar ao Carrinho</Button>
          </div>
        </div>
      </div>
    </>
  )
}

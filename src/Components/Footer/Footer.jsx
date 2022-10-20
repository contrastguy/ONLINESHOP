import React from "react";
// import { Container,Image } from "react-bootstrap";
import Facebook from "./Imagens/facebook.png"
import Instagram from "./Imagens/instagram.png"
import "./CSS/styles.css"
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';


const Footer = () => {
    return (
        // <Container id="footer-container" className=" d-flex flex-row bg-dark max-auto">
        //     <Container className="justify-content-start">
        //         <h3>NOS SIGA NAS REDES</h3>
        //         <a href="#"><Image src={Facebook} alt="Logo do Facebook"/></a>
        //         <a href="#"><Image src="./IMAGENS/instagram.png" alt="Logo do Instagram"/></a>
        //     </Container>

        //     <Container className="justify-content-center">
        //         <h3>RECEBA OFERTAS</h3>
        //         <div>
        //             <input type="email" id="email" name="email" placeholder="Coloque seu e-mail aqui!"/>
        //                 <input type="submit" value="SE INSCREVA" id="submit-email"/>
        //                 </div>
        //                 <p>2022 by TERA</p>
        //     </Container>
            
        //         <Container className="justify-content-end">
        //             <h3>FALE CONOSCO</h3>
        //             <p>(XX) X-XXXX-XXXX</p>
        //             <p>contato@contato.com</p>

        //         </Container>
        // </Container>

        <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <a className='btn btn-outline-light btn-floating mx-4 ' href='#!' role='button'>
            <img id="Facebook-img" src={Facebook} alt="Facebook"/>
          </a>

          <a className='btn btn-outline-light btn-floating mx-4 ' href='#!' role='button'>
            <img id="Instagram-img" src={Instagram} alt="instagram " />
          </a>

        </section>

        <section className=''>
          <form action=''>
            <div className='row d-flex justify-content-center'>
              <div className='col-auto'>
                <p className='pt-2'>
                  <strong>Fique por dentro das novidades</strong>
                </p>
              </div>

              <MDBCol md='5' start='12'>
                <MDBInput contrast type='email' placeholder='E-mail ' className='mb-4' />
              </MDBCol>

              <div className='col-auto'>
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  inscreva-se
                </MDBBtn>
              </div>
            </div>
          </form>
        </section>

        <section className='mb-4'>
          
        </section>

        <section id="Section-footer" className='d-flex justify-content-center '>
          <MDBRow>
            <MDBCol  className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Fale com a Gente</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  (XX) XXXX-XXXX
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    onlineshop@contato.com
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright
      </div>
    </MDBFooter>



    )

}

export default Footer
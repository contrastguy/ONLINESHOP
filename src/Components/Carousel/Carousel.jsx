import React, { useState } from 'react';
import Salvatore from "./Imagens/Salvatore Ferragamo.jpg"
import Sale from "./Imagens/data.png"
import Sapatos from "./Imagens/sapatos.jpeg"
import { Image,Carousel } from "react-bootstrap";
import "./CSS/style.css"

const Carrossel = () => {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
    return (
            <div>
                <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100  mx-auto"
                            src={Salvatore}
                            alt="Saldão" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image 
                            id="sapato-img"
                            className="d-block w-50 mx-auto"
                            src={Sapatos}
                            alt="First slide" />
                        <Carousel.Caption>
                            <p id="p-carrosel">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
    )
}


export default Carrossel;

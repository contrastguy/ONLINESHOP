import React, { useState } from 'react';
import Salvatore from "./Imagens/Salvatore Ferragamo.jpg"
import Pradaimg from "./Imagens/Pradaimg.jpg"
import { Image,Carousel } from "react-bootstrap";
import "./CSS/style.css"

const Carrossel = () => {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
    return (
            <div className='max'>
                <Carousel  variant="dark" activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <Image
                            className="d-block w-75  mx-auto"
                            src={Salvatore}
                            alt="Saldão" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image 
                            id="sapato-img"
                            className="d-block w-75 mx-auto"
                            src={Pradaimg}
                            alt="First slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
    )
}


export default Carrossel;

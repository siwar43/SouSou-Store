import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
    return (
        <div id="home">
        <Carousel>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="/Sousou closet.png"
                alt="Premier slide"
                style={{ maxHeight: '600px' }}
            />
            </Carousel.Item>

            <Carousel.Item>
            <img
                className="d-block w-100"
                src="/Sousou closet1.png"
                alt="Deuxième slide"
                style={{ maxHeight: '600px' }}
            />
            </Carousel.Item>

            <Carousel.Item>
            <img
                className="d-block w-100"
                src="/Sousou closet2.png"
                alt="Troisième slide"
                style={{ maxHeight: '600px' }}
            />
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default Home;

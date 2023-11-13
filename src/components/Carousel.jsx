import React from 'react'
import Carousel1 from "../images/Carousel1.jpg"
import Carousel2 from "../images/Carousel2.jpg"
import Carousel3 from "../images/Carousel3.jpg"
import Carousel4 from "../images/Carousel4.jpg"
import Carousel5 from "../images/Carousel5.jpg"
import Carousel6 from "../images/Carousel6.jpg"
import Carousel7 from "../images/Carousel7.jpg"
import Carousel8 from "../images/Carousel8.jpg"
import Carousel9 from "../images/Carousel9.jpg"
import Carousel10 from "../images/Carousel10.jpg"
import Carousel11 from "../images/Carousel11.jpg"
import Cards from '../components/Cards'

const Carousel = () => {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Carousel1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Carousel2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Carousel3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Carousel4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Carousel5} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Carousel6} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Carousel7} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Carousel8} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Carousel9} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Carousel10} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Carousel11} className="d-block w-100" alt="..." />
          </div>

        </div>
        <button
          className="carousel-control-prev"  style={{ top: '10px', left: '10px', right: 'auto' }}
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
    

    </div>
  )
}

export default Carousel

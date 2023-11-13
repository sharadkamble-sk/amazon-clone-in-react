import React from 'react'
import Carousel1 from "../images/Carousel1.jpg"
import Carousel2 from "../images/Carousel2.jpg"
import Carousel3 from "../images/Carousel3.jpg"

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
  </div>
  <button
    className="carousel-control-prev"
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

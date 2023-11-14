import React from 'react'

const Productcards = () => {
  return (
    <div>
      <div className="container mt-5">
  <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="d-flex justify-content-around flex-wrap">
          {/* Cards 1-5 */}
          <div className="card mb-4" style={{ width: "18rem" }}>
            <img
              src="https://picsum.photos/400/200?random=1"
              className="card-img-top"
              alt="Product 1"
            />
            <div className="card-body">
              <p className="card-text">20% off</p>
              <h5 className="card-title">Product 1</h5>
            </div>
          </div>
          <div className="card mb-4" style={{ width: "18rem" }}>
            <img
              src="https://picsum.photos/400/200?random=2"
              className="card-img-top"
              alt="Product 2"
            />
            <div className="card-body">
              <p className="card-text">15% off</p>
              <h5 className="card-title">Product 2</h5>
            </div>
          </div>
          <div className="card mb-4" style={{ width: "18rem" }}>
            <img
              src="https://picsum.photos/400/200?random=3"
              className="card-img-top"
              alt="Product 3"
            />
            <div className="card-body">
              <p className="card-text">25% off</p>
              <h5 className="card-title">Product 3</h5>
            </div>
          </div>
          <div className="card mb-4" style={{ width: "18rem" }}>
            <img
              src="https://picsum.photos/400/200?random=4"
              className="card-img-top"
              alt="Product 4"
            />
            <div className="card-body">
              <p className="card-text">30% off</p>
              <h5 className="card-title">Product 4</h5>
            </div>
          </div>
         
        </div>
      </div>
      <div className="carousel-item">
        <div className="d-flex justify-content-around flex-wrap">
          {/* Cards 6-10 */}
          <div className="card mb-4" style={{ width: "18rem" }}>
            <img
              src="https://picsum.photos/400/200?random=6"
              className="card-img-top"
              alt="Product 6"
            />
            <div className="card-body">
              <p className="card-text">18% off</p>
              <h5 className="card-title">Product 6</h5>
            </div>
          </div>
          <div className="card mb-4" style={{ width: "18rem" }}>
            <img
              src="https://picsum.photos/400/200?random=7"
              className="card-img-top"
              alt="Product 7"
            />
            <div className="card-body">
              <p className="card-text">22% off</p>
              <h5 className="card-title">Product 7</h5>
            </div>
          </div>
          <div className="card mb-4" style={{ width: "18rem" }}>
            <img
              src="https://picsum.photos/400/200?random=8"
              className="card-img-top"
              alt="Product 8"
            />
            <div className="card-body">
              <p className="card-text">15% off</p>
              <h5 className="card-title">Product 8</h5>
            </div>
          </div>
          <div className="card mb-4" style={{ width: "18rem" }}>
            <img
              src="https://picsum.photos/400/200?random=9"
              className="card-img-top"
              alt="Product 9"
            />
            <div className="card-body">
              <p className="card-text">20% off</p>
              <h5 className="card-title">Product 9</h5>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#productCarousel"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#productCarousel"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

    </div>
  )
}

export default Productcards

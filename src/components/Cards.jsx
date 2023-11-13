import React from 'react'

const Cards = () => {
    return (
        <div className='section m-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img src="https://www.businessinsider.in/thumb.cms?msid=94359894&width=1200&height=900" className="card-img-top" alt="Product 1" />
                            <div className="card-body">
                                <p className="card-text">Up to 75% off</p>
                                <h5 className="card-title">Headphones</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <img src="https://m.economictimes.com/thumb/msid-94674207,width-1200,height-900,resizemode-4,imgsize-37878/deals-on-laptops.jpg" className="card-img-top" alt="Product 2" />
                            <div className="card-body">
                                <p className="card-text">Up to 75% off</p>
                                <h5 className="card-title">Laptops</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <img src="https://www.businessinsider.in/photo/99964822/amazon-great-summer-sale-best-deals-on-smartphones.jpg?imgsize=101558" className="card-img-top" alt="Product 3" />
                            <div className="card-body">
                                <p className="card-text">Up to 75% off</p>
                                <h5 className="card-title">Smartphones</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <img src="https://www.businessinsider.in/thumb.cms?msid=94369015&width=1200&height=900" className="card-img-top" alt="Product 4" />
                            <div className="card-body">
                                <p className="card-text">Up to 75% off</p>
                                <h5 className="card-title">Cameras</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards

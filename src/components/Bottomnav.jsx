import React from 'react'

const Bottomnav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#232F3E' }}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link text-light" href="#">All</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-light" href="#">Amazon miniTV</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Sell</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-light" href="#">Best Sellers</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-light" href="#">Today's Deals</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-light" href="#">Mobiles</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-light" href="#">Customer Service</a>
          </li>
          <li className="nav-item active ml-auto">
            <a className="nav-link text-light" href="#">Customer Service</a>
          </li>
          <li className="nav-item active ml-auto">
            <a className="nav-link text-light" href="#">Electronics</a>
          </li>
          <li className="nav-item active ml-auto">
            <a className="nav-link text-light" href="#">Releases</a>
          </li>
          <li className="nav-item active ml-auto">
            <a className="nav-link text-light" href="#">New Releases</a>
          </li>
   
          {/* <li className="nav-item active ml-auto">
            <a className="nav-link text-light" href="#">Prime</a>
          </li>
   
          <li className="nav-item active ml-auto">
            <a className="nav-link text-light" href="#">Home & Kitchen</a>
          </li>
          <li className="nav-item active ml-auto">
            <a className="nav-link text-light" href="#">Gift Ideas</a>
          </li>
          <li className="nav-item active ml-auto">
            <a className="nav-link text-light" href="#">Gift Ideas</a> 
          </li> */}
          <li className="nav-item active ml-auto">
            <a className="nav-link text-light" href="#">New Launches from Mobile, Electronics & more ! Shop Now</a> 
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Bottomnav

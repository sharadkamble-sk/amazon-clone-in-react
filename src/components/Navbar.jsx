import React from 'react'
import Logo from "../images/logo.png"
import Flag from "../images/Flag.png"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* <a className="navbar-brand text-light" href="#">
      Navbar
    </a> */}
                    <a className="navbar-brand" href="#">
                        <img
                            src={Logo}
                            width={95}
                            height={35}
                            className="d-inline-block mt-2"
                        />

                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon text-light" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <div id="glow-ingress-block">
                                    <span className=" text-light" >
                                        Delivering to Pune 411037
                                    </span>
                                    <span className=" text-light">
                                        <strong> <i className="fas fa-location-dot"> </i> Update location</strong>
                                    </span>
                                </div>

                            </li>
                            <div className="input-group mb-1" style={{ maxWidth: '600px', margin: '10px ' }}>
                                {/* <span className="input-group-text">
                                    <span className="mr-2">All <i className="fas fa-caret-down"></i></span>

                                </span> */}

                                <select className="form-select" style={{ maxWidth: '70px' }} id="categoryDropdown" aria-label="Select a category">
                                    <option value="all" style={{ width: '70px' }}>
                                        All
                                    </option>
                                    <option value="electronics" style={{ width: '70px' }}>
                                        Electronics
                                    </option>
                                    <option value="clothing" style={{ width: '70px' }}>
                                        Clothing
                                    </option>
                                    <option value="books" style={{ width: '70px' }}>
                                        Books
                                    </option>
                                </select>

                                <input
                                    type="text"
                                    aria-label="Search on Amazon"
                                    className="form-control"
                                    placeholder="Search on Amazon.in"
                                />
                                <span className="input-group-text"> <i className="fas fa-search"></i></span>
                            </div>
                        </ul>

                        <div className="dropdown">
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenu2"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ backgroundColor: 'transparent', borderColor: 'transparent', color: '#fff' }}
                            >
                                <img
                                    src={Flag}
                                    width={17}
                                    height={13}
                                    className="d-inline-block "
                                /> <strong>EN</strong>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{ backgroundColor: 'transparent' }}>
                                <li>
                                    <button className="dropdown-item" type="button">
                                        English
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item" type="button">
                                        हिन्दी (HI)
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item" type="button">
                                        தமிழ் (TA)
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item" type="button">
                                        తెలుగు (TE)
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item" type="button">
                                        ಕನ್ನಡ (KN)
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item" type="button">
                                        മലയാളം (ML)
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item" type="button">
                                        বাংলা (BN)
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item" type="button">
                                        मराठी (MR)
                                    </button>
                                </li>
                            </ul>

                        </div>
                        <div className="text-light m-2">
                            Hello sign, in 
                            <div id="glow-ingress-block">
                               
                                <span className=" text-light">
                                    <strong>Account & Lists</strong>
                                </span>
                                
                            </div>

                        </div>
                        <div className="text-light m-2">
                            Returns
                            <div id="glow-ingress-block">
                               
                                <span className=" text-light">
                                    <strong>& Oders</strong>
                                </span>
                                
                            </div>

                        </div>
                        <div className="text-light m-2">
                           
                            <div id="glow-ingress-block">
                               
                                <span className=" text-light">
                                    <strong><i className="fas fa-"></i> card</strong>
                                </span>
                                
                            </div>

                        </div>



                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar

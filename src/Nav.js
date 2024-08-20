import React from 'react'
import { Link } from "react-router-dom";
import './nav.css'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
        <div className="container-fluid">
        <Link to="/" className="navbar-brand">Spices</Link>
          {/* <a className="navbar-brand" href="">Spices</a> */}
          <button className="navbar-toggler" type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent"  aria-expanded="false" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" 
          id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
            <Link to="/" className="nav-link " >Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/about" className="nav-link " >About</Link>
            </li>
            <li className="nav-item">
            <Link to="/products" className="nav-link " >Products</Link>
            </li>
            <li className="nav-item">
            <Link to="/contacts" className="nav-link " >Contacts</Link>
            </li>
          </ul>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <button className="btn p-2 my-lg-0 my-2">Sign In</button>  
         </div>                  
        </div>
      </nav>
  )
}

export default Nav
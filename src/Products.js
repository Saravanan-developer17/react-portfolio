import React from 'react'
import Nav from './Nav'
import { Link } from "react-router-dom";
import './products.css'
import image1 from './product1.jpg'
import image2 from './product2.jpg'
import image3 from './product3.jpeg'
import image4 from './product4.jpg'
import image5 from './product5.jpeg'
import image6 from './product6.jpeg'
import image7 from './product7.jpeg'
import image8 from './product8.jpeg'
import image9 from './product9.jpeg'
import Footer from './Footer';

const Products = () => {
  return (
    <div>
      <Nav/>
    <section id="product">
      <div className="container m-5">
        <h1 className="text-center my-5">OUR PRODUCTS</h1>
        
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 ">
            <div className="card">
              <img src={image1} className="card-img-top p-2 " alt='image1' />
              <div className="card-body text-center">
                <h5 className="card-tittle">Termeric $-4</h5>
                <Link to="#" className="btn signin">Add to Cart</Link>
              
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-12">
            <div className="card">
              <img src={image2} className="card-img-top p-2" alt='image1'  />
              <div className="card-body text-center">
                <h5 className="card-tittle">Red chilly $-6</h5>
                <Link to="#" className="btn signin">Add to Cart</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-12">
            <div className="card">
              <img src={image3} className="card-img-top p-2" alt='image1' />
              <div className="card-body text-center">
                <h5 className="card-tittle">Black Pepper $-8</h5>
                <Link to="#" className="btn signin">Add to Cart</Link>
              </div>
            </div>
          </div>
          </div>
          

        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 ">
            <div className="card">
              <img src={image4} className="card-img-top p-2 " alt='image1' />
              <div className="card-body text-center">
                <h5 className="card-tittle">Ginger $-4</h5>
                <Link to="#" className="btn signin">Add to Cart</Link>
              </div>
            </div>
          </div>
          

          <div className="col-lg-4 col-md-4 col-12">
            <div className="card">
              <img src={image5} className="card-img-top p-2" alt='image1' />
              <div className="card-body text-center">
                <h5 className="card-tittle">Clove $-6</h5>
                <Link to="#" className="btn signin">Add to Cart</Link>
              </div>
            </div>
          </div>
          

          <div className="col-lg-4 col-md-4 col-12">
            <div className="card">
              <img src={image6} className="card-img-top p-2" alt='image1' />
              <div className="card-body text-center">
                <h5 className="card-tittle">Garlic $-8</h5>
                <Link to="#" className="btn signin">Add to Cart</Link>
              </div>
            </div>
          </div>
          </div>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 ">
            <div className="card">
              <img src={image7} className="card-img-top p-2 " alt='image1' />
              <div className="card-body text-center">
                <h5 className="card-tittle">Cumin $-5</h5>
                <Link to="#" className="btn signin">Add to Cart</Link>
              </div>
            </div>
          </div>  

          <div className="col-lg-4 col-md-4 col-12">
            <div className="card">
              <img src={image8} className="card-img-top p-2" alt='image1' />
              <div className="card-body text-center">
                <h5 className="card-tittle">Coriander $-11</h5>
                <Link to="#" className="btn signin">Add to Cart</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-12">
            <div className="card">
              <img src={image9} className="card-img-top p-2" alt='image1' />
              <div className="card-body text-center">
                <h5 className="card-tittle">Cinnamon $-15</h5>
                <Link to="#" className="btn signin">Add to Cart</Link>
              </div>
            </div>
          </div>
          </div>
        </div>
    </section>
    <Footer/>
    </div>
  )
}

export default Products
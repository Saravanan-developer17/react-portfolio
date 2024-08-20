import React from 'react'
import './home.css'
import Nav from './Nav'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
      <Nav/>
      <section id="home">
      
        <h1 className="text-center">ORGANIC SPICES</h1>
        <p>Variety's the very spice of life, That gives it all its flavor</p>
        <div className="input-group m-4">
            <input type="text" className="form-control" placeholder="Email Address"/>
            <button className="btn signin">Get Started</button>
        </div>
     </section>
      <Footer/>
    </div>
    
  )
}

export default Home
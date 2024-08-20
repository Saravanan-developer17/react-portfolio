import React from 'react'
import Nav from './Nav'
import './about.css'
import image from './about1.jfif'
import Footer from './Footer'

export const About = () => {
  return (
    <div>
        <Nav/>
    <section id="about">

        <div className="container-fluid">
            <div className="row ">
                <div className="col-lg-6 col-md-6 col-12">
                    <img src={image} className="img-fluid" alt='image1' />
                </div>
                <div className="col-lg-6 col-md-6 col-12 ">
                    <h1>ABOUT US</h1>
                    <p>
                        In the culinary arts, a spice is any seed, fruit, root, bark, 
                        or other plant substance in a form primarily used for flavoring or coloring food. 
                        Spices are distinguished from herbs, which are the leaves, flowers, 
                        or stems of plants used for flavoring or as a garnish. Spices are sometimes used in medicine, 
                        religious rituals, cosmetics, or perfume production. They are usually classNameified into spices, 
                        spice seeds, and herbal categories.[1] For example, vanilla is commonly used as an ingredient in fragrance manufacturing.[2] 
                        Plant-based sweeteners such as sugar are not considered spices. Spices may be used fresh and whole, 
                        after drying, grating, chopping, crushing, or grinding, or by extraction into a tincture. 
                        Such processing may happen before a spice is offered for sale, while preparing a dish in a kitchen, 
                        or after a dish has been presented for consumption (such as peppercorns ground at the table as a condiment). 
                        Some spices such as turmeric are seldom available either fresh or whole and so must be purchased in ground form. 
                        Small seeds such as fennel or mustard may be used either whole or in powdered form.</p>
                </div>
            </div>
        </div>
     </section>
     <Footer/>
    </div>
  )
}

export default About

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const artPage = () => (
  <Layout title = "ART">
    <Seo title="Page three" />
    
    
    <h1>Generative Art</h1>
    <p>All of this art has been created using the p5.js library by the Processing Foundation.
    Through creative coding I have been able to study and explore many programing concepts such as 
    recursion, vector math, and objects.  </p>

    <p style ={{
      textAlign:'center'
    }}>

    <StaticImage style ={{
      maxWidth: '50%',
      height: 'auto'
    }}  src="../images/meatballs1.png" alt="A dinosaur" /> 
    <StaticImage style ={{
      maxWidth: '50%',
      height: 'auto'
    }} src="../images/meatballs2.png" alt="A dinosaur" />
    <StaticImage style ={{
      maxWidth: '50%',
      height: 'auto'
    }} src="../images/spaghetti.png" alt="A dinosaur" /> 
    <StaticImage style ={{
      maxWidth: '50%',
      height: 'auto'
    }} src="../images/tiedie.png" alt="A dinosaur" />
    <StaticImage style ={{
      maxWidth: '50%',
      height: 'auto'
    }} src="../images/tree.png" alt="A dinosaur" />
    <StaticImage style ={{
      maxWidth: '50%',
      height: 'auto'
    }} src="../images/triIncursion.png" alt="A dinosaur" />
    
    </p>
   
    
  </Layout>

)

export default artPage

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import InputBox from "../components/inputBox"

const projectsPage = () => (
  <Layout title = "PROJECTS">
    <Seo title="Page two" />
    
    
    <h1>BrailleBoard</h1>
    <p>BrailelBoard is a teaching tool for the visually impaired. 
    The traditional Qwerty Keyboard is unintuitive and maybe be 
    difficult to use for young visually impaired users.
    BrailleBoard utilizes the T,Y,G,H,B,N keys to simulate
    the six dots of the braille system. When using Braille Board
    seperate each "Braile letter" with a space. Two consecutive spaces
    will be the equivalent of a translated space. When your sentence is finished press enter. </p>

    <StaticImage src="../images/braille.png" alt="A dinosaur" /> 
    

     <InputBox/>

   
    
  </Layout>

)

export default projectsPage

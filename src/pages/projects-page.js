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
    <p>BrailleBoard is a teaching tool for the visually impaired as well as those seeking to learn Braille. 
    The traditional QWERTY keyboard is unintuitive and maybe be 
    difficult to use for young visually impaired users.
    BrailleBoard utilizes the T,Y,G,H,B, and N keys to simulate
    the six dots of the Braille system. For example, "yghb " is equivalent to the letter T. When using BrailleBoard,
    seperate each "Braille letter" with a space. Two consecutive spaces
    will be the equivalent of a translated space. When your sentence is finished press enter. <strong>For example, try typing "yghn th tgb ty thb ytb th " below.</strong> </p>

    <StaticImage src="../images/braille.png" alt="A dinosaur" /> 
    

     <InputBox/>

   
    
  </Layout>

)

export default projectsPage

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <div>
<p style ={{
  textAlign:'center'
}}>
<p>
<Link
          to="/"
          style={{
            color: '#f3a712',
            fontFamily: `monospace`,
            fontSize: `40px`,
            textDecoration: `none`,
          }}
        >
        <StaticImage style ={{
          marginTop: '8%',
          maxWidth: '30%',
          height: 'auto'
        }} 
        src="../images/Icontv.png" alt="A dinosaur" />
          
  </Link>
  </p>
  <p>
 <Link
          to="/projects-page/"
          style={{
            color: '#f3a712',
            fontFamily: `monospace`,
            fontSize: `20px`,
            textDecoration: `none`,
          }}
        > PROJECTS
        </Link>
        </p>
        <p>
        <Link
        to="/art-page/"
        style={{
          color: '#f3a712',
          fontFamily: `monospace`,
          fontSize: `20px`,
          textDecoration: `none`,
        }}
      > ART
      </Link></p></p>
        
  </div>
)

export default IndexPage

import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      textAlign: 'center',
      marginTop: '20px'
    }}
  >
    <div
      style={{
        height: '800 px',
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
        <Link
          to="/"
          style={{
            color: '#f3a712',
            fontFamily: `monospace`,
            fontSize: `40px`,
            textDecoration: `none`,
          }}
        >
        <StaticImage textAlign ='left' width= '115px' height = '280px' src="../images/Icontv.png" alt="A dinosaur" />
        
        </Link>
     
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

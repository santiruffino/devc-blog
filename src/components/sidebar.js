import React from "react"
import { Link } from "gatsby"
import { FaLinkedin, FaTwitter, FaGithub, FaFacebookF, FaEnvelope, FaTelegramPlane } from "react-icons/fa";
import { useStaticQuery, graphql } from "gatsby"


const SideBar = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            social {
              twitter
              facebook
              github
              email
              linkedin
            }
          }
        }
      }
    `
  )

  const facebook = "https://facebook.com/" + site.siteMetadata.social.facebook
  const github = "https://github.com/" + site.siteMetadata.social.github
  const email = "mailto:" + site.siteMetadata.social.email
  const linkedin = "https://linkedin.com/in/" + site.siteMetadata.social.linkedin
  const telegram = "https://t.me/" + site.siteMetadata.social.telegram
  const twitter = "https://twitter.com/" + site.siteMetadata.social.twitter

  return (
  <aside className="sidebar">

  <div className="sidebar-container">
    <div className="sidebar-logo">
      <Link to="/" className="logo">{ site.siteMetadata.title }</Link>
    </div>

    <menu className="sidebar-menu">
      <li className="menu-items"><Link to="/" className="menu-links" activeClassName="active">Home</Link></li>
      <li className="menu-items"><Link to="/about" className="menu-links" activeClassName="active">About</Link></li>
      <li className="menu-items"><Link to="/projects" className="menu-links" activeClassName="active">Projects</Link></li>
    </menu>

    <div className="btn-group">
      <Link to="/" className="mob-menu-items" activeClassName="active"><button className="navbtn">Home</button></Link>
      <Link to="/about" className="mob-menu-items" activeClassName="active"><button className="navbtn">About</button></Link>
      <Link to="/projects" className="mob-menu-items" activeClassName="active"><button className="navbtn">Projects</button></Link>
    </div>

    <div className="sidebar-social">
      <li className="social-items"><a href={github} className="social-links" target="_blank" rel="noopener noreferrer"><FaGithub className="social-icons"/></a></li>
      <li className="social-items"><a href={twitter} className="social-links" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icons"/></a></li>
    </div>

  </div>
</aside>
)
}

export default SideBar
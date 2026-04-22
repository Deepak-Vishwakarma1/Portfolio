import React from "react"
import "./footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer className="footer-heading">
        <div className='container padding'>
          <div className='box-logo'>
            <div className="footer-center">
              <a href="https://www.linkedin.com/in/deepakvishwakarmavns/" className='icon_color-footer'><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/Deepak-Vishwakarma1" className='icon_color-footer'><i className="fab fa-github"></i></a>
              <a href="https://leetcode.com/u/Deepak-Vishwakarma/" className='icon_color-footer'><i className="fas fa-code"></i></a>
            </div>
          </div>
          <div className="footer-text">
            <p1 id="footer-text">Software Developer</p1>
          </div>
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skill">Skill</Link>
            <Link to="/project">Project</Link>
            <Link to="/certificates">Certificate</Link>
            <Link to="/contact">Contact</Link>
          </nav>

        </div>
      </footer>


    </>


  )
}

export default Footer

import React from "react"
import { Link } from "gatsby"
import "../styles/Header.scss"

const Header = () => {
  return (
    <header className="Header-header">
      <h1>
        <Link to="/" className="Header-title">
          Markriz
        </Link>
      </h1>
      <nav>
        <ul className="Header-nav-list">
          <li>
            <Link className="Header-nav-item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="Header-nav-item" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="Header-nav-item" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="Header-nav-item" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

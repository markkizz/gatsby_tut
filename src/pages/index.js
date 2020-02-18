import React from "react"
import {Link} from 'gatsby';
import Footer from '../components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';


const IndexPage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>I'm Mark</h2>
      <p>I'm frontend developer</p>
      <Link to="/contact">contact me?</Link>
      <Footer />
    </div>
  )
}

export default IndexPage

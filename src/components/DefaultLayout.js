import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "../styles/DefaultLayout.scss"

export default function DefaultLayout(props) {
  return (
    <div className="container">
      <div className="Layout-content">
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  )
}

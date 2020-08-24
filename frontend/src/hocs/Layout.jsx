import React from "react"
import Navbar from "../Component/Navbar"
import Footer from "../Component/Footer"
import "../assets/base.style.scss"

const CustomLayout = (props) => (
  <div>
    <Navbar />
    <div id="page-container">
    <div id="content-wrap">
    {props.children}
    </div>
	<Footer />
	</div>
  </div> 
)

export default CustomLayout
import React from "react"
import Navbar from "../Component/Navbar"
import Footer from "../Component/Footer"


const CustomLayout = (props) => (
  <div>
    <Navbar />
    <br />
    {props.children}
    <br />
    <Footer />
  </div> 
)

export default CustomLayout
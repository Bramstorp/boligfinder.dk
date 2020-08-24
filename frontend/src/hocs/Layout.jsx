import React from "react"
import Navbar from "../Component/Navbar"
import Footer from "../Component/Footer"

const CustomLayout = (props) => (
  <div>
    <Navbar />
	{props.children}
  </div> 
)

export default CustomLayout
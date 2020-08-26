import React from "react"
import Navbar from "../Component/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomLayout = (props) => (
  <div>
    <Navbar />
	{props.children}
  </div> 
)

export default CustomLayout
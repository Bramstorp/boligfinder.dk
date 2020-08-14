import React from "react"
import { Link } from "react-router-dom"
import navbar from "../Component/Navbar"

class CustomLayout extends React.Component {
  render() {
    return (
      <div>
        <navbar />
          <div>
            {this.props.children}
          </div>
        <h1>Footer</h1>
      </div> 
    )
  }
}

export default CustomLayout
import React from "react"
import { Link } from "react-router-dom"

class CustomLayout extends React.Component {
  render() {
    return (
      <div>
        <h1>Navbar</h1>
          <div>
            {this.props.children}
          </div>
        <h1>Footer</h1>
      </div> 
    )
  }
}

export default CustomLayout
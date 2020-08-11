import React, {Component} from "react"

class Listing extends Component {
	render() {
	console.log(this.props)
		return (
			<h1>{this.props.title}</h1>
		)
	}
}

export default Listing
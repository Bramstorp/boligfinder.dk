import React from "react"
import axios from "axios"
import Listing from "../Component/ListingComponent"


class Homepage extends React.Component {

	state = {
		listing: []
	}

	componentDidMount() {
		axios.get("http://127.0.0.1:8000/api/listing/")
			.then(res => {
				this.setState({
					listing: res.data
				});
				console.log(res.data)
			})
	}

	render() {
		return(
			<div>
				<Listing data={this.state.listing}/>
			</div>
		)
	}

}

export default Homepage
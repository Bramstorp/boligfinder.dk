import React from "react"
import axios from "axios"
import Listing from "../Component/ListingComponent"
import ListingForm from "../Component/ListingForm"


class Homepage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			listings: []
		}
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
				<ListingForm />
				<Listing data={this.state.listing}/>
			</div>
		)
	}
	

}

export default Homepage
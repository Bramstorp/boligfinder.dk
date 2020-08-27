import React from 'react'
import axios from 'axios'
import ListingCard from "../Component/ListingCards"

class Listing extends React.Component  {

	state = {
		listings: []
	}	

	componentDidMount() {
		axios.get("http://127.0.0.1:8000/api/listing/")
			.then(res => {
				this.setState({
					listings: res.data
				})
				//console.log(res.data)
			})			
	}
	
	render() {		
		return (
			<div className="container">
				<ListingCard data={this.state.listings}/>				
			</div>
		)
	}
}

export default Listing
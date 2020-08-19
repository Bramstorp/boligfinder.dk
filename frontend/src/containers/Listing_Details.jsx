import React from 'react'
import axios from 'axios'
import ListingDetailsView from "../Component/ListingDetails"

class ListingDetails extends React.Component  {

	state = {
		listings: {}
	}	

  	componentDidMount() {
    	const listingID = this.props.match.params.listingID
    	axios.get(`http://127.0.0.1:8000/api/listing/${listingID}`)
    		.then(res => {
	      		this.setState({
	        		listings: res.data
	      		});
	      		console.log(res.data)
    		});
    }	

	render() {		
		return (
			<div className="container">
				<ListingDetailsView/>			
			</div>
		)
	}
}

export default ListingDetails



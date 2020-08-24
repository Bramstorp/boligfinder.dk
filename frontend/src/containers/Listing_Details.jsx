import React, { useEffect } from 'react'
import axios from 'axios'
import ListingDetailsView from "../Component/ListingDetails"

class ListingDetails extends React.Component  {
	render() {		
		return (
			<div className="container">
				<ListingDetailsView data={this.props.location.myHouse}/>				
			</div>
		)
	}
}

export default ListingDetails

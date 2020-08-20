import React from 'react'
import "../assets/ListingCard.style.scss"
import { BrowserRouter as Router, Link } from 'react-router-dom';

class ListingCard extends React.Component {
	render() {
		
		const card = this.props.data.map(item => {
			return (
			<div className="card">
			  <img className="card-img-top" src="https://via.placeholder.com/300x200"/>
			  <div className="card-body">
			    <h5 className="card-title">{item.title}</h5>
			    <p className="card-text">{item.description}</p>
			    <Link to={`/listing_details/${item.slug}`} className="btn btn-primary" >View House</Link>
			    <p className="">{item.price}</p>
			    <p className="">{item.sale_type}</p>
			  </div>
			</div>
			)
		})

		return (
			<div className="row">
				{ card }
			</div>
		)
	
	}
}

export default ListingCard
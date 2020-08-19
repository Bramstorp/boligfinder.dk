import React from 'react'
import "../assets/ListingCard.style.scss"


const ListingCard = (props) => (
	<div className="card">
	  <img className="card-img-top" src="https://via.placeholder.com/300x200"/>
	  <div className="card-body">
	    <h5 className="card-title">test</h5>
	    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	    <a className="btn btn-primary">Go somewhere</a>
	  </div>
	</div>
)

export default ListingCard
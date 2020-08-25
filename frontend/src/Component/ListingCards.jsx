import React from 'react'
import "../assets/ListingCard.style.scss"
import { BrowserRouter as Router, Link } from 'react-router-dom';

class ListingCard extends React.Component {
	render() {
		
		const card = this.props.data.map((item, index) => {
			return (
			<div className="card">
			  <img className="card-img-top" style={{height: "150px"}} src={item.main_image ? item.main_image : "https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg" }/>
			  <div className="card-body">
			    <h5 className="card-title">{item.title}</h5>
			    <p className="card-text">{item.description}</p>
				<Link to=
				// {`/listing_details/${item.slug}`}
				{ 
					{
						pathname: "/listing_details/" + item.slug,
						myHouse: this.props.data[index]
					}
				}
				className="btn btn-primary" >View House</Link>
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
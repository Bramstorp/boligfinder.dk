import React from 'react'
import "../assets/ListingCard.style.scss"
import { BrowserRouter as Router, Link } from 'react-router-dom';

class ListingCard extends React.Component {
	render() {
		
		const card = this.props.data.map((item, index) => {
			return (
					<div className="container card">
						<div className="card-horizontal">
						  	
						  	<div className="img-square-wrapper">
						  		<img className="houseimg" src={item.main_image ? item.main_image : "https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg" } />
						  	</div>

						  	<div className="card-body">
						  		
						  		<div className="row">
								    <div className="col">
									    <h5 className="card-title">{item.title}</h5>
									    <p className="card-text">{item.house.address}</p>
							    	</div>

								    <div className="col">
									    <div className="row">
										    <p className="col">House Price: ${item.price}</p>
										    <p className="col">House Type: {item.house.home_type}</p>
									    </div>
									    <div className="row">
										    <p className="col">Area Ground: {item.house.area_ground}m2</p>
										    <p className="col">Area: {item.house.area}m2</p>
									    </div>
									</div>

							    </div>

							    <br />
							    <Link to=
								{ 
									{
										pathname: "/listing_details/" + item.slug,
										myHouse: this.props.data[index]
									}
								}
								className="btn btn-primary" >View House</Link>

						    </div>
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
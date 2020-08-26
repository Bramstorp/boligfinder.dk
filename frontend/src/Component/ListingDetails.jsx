import React from 'react'
import { Row, Col, Descriptions  } from 'antd';
import { Empty } from 'antd';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ListingDetailsView extends React.Component {
	
	state = {
		listings: []
	}

	componentDidMount() {
		if (this.props.data == null) {
			axios.get("http://127.0.0.1:8000/api/listing/")
			.then(res => {
				const item = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
				var index = res.data.findIndex(function(person) {
					return person.slug == item
				});
				this.setState({
					listings: res.data[index]
				})
				//console.log(res.data[index])
			})	
		}
		else {
			// console.log(this.props.data)
			this.setState({
				listings: this.props.data
			})
		}
	}

	render() {
		var house = this.state.listings;
		var house_d = house.house;
		var agent = this.state.listings.agent;
		const numberWithCommas = (x) => {
		    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		};
		if (house_d)
			return (
				<div>
					<img className="container img-container" src={house.main_image ? house.main_image : "https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg"}/>
					
					<div className="container">
						<div className="row rowstyle listing_container">
							
							<div className="col colstyle">						
								<a><FontAwesomeIcon icon="home"/> Open House</a>
							</div>
							
							<div className="col colstyle">
								<a>Features</a>
							</div>

							<div className="col colstyle">
								<a>Photos</a>
							</div>
							
							<div className="col colstyle">
								<a>Location</a>
							</div>
							
							<div className="col colstyle">
								<a>Contract</a>
							</div>
						</div>

						<div className="row rowstyle">
							
							<div className="col-lg-6 left-side">				
								
								<p className="title">{house.title}</p>
								<p className="address">{house_d.address}, {house_d.state}, {house_d.zipcode}, {house_d.city} </p>
								<p className="price">Price: ${numberWithCommas(house.price)}</p>

								<ul className="list-group">
									<li>Property ID: {house_d.id} </li>
									<li>Posted on: {house.listed_date}</li>
									<li>House Type: {house_d.home_type}</li>
									<li>House Build: {house_d.build_year}</li>
								</ul>

								<p className="agent">Agent: {agent.full_name}</p>

								<div className="row rowstyle">
									
									<p className="col colstyle info"><FontAwesomeIcon icon="home"/> Area: {house_d.area}</p>
									<p className="col colstyle info"><FontAwesomeIcon icon="object-group"/> Area Ground: {house_d.area_ground}</p>
									<p className="col colstyle info"><FontAwesomeIcon icon="object-group"/> Floors: {house_d.floors}</p>

								</div>

								<div className="row rowstyle">			
									<p className="col colstyle info"><FontAwesomeIcon icon="bed"/> Bedrooms: {house_d.bedrooms}</p>
									<p className="col colstyle info"><FontAwesomeIcon icon="bath"/> Bathrooms: {house_d.bathrooms}</p>
									<p className="col colstyle info"><FontAwesomeIcon icon="house-user"/> Rooms: {house_d.rooms}</p>					
								</div>

							</div>

							<div className="col-lg-6">
								<p className="description">{house.description}</p>
							</div>


							<div className="col-lg-6">
								<p className="features">Features</p>
								<ul class="list-group">
									<li class="list-group-item">Cras justo odio</li>
									<li class="list-group-item">Dapibus ac facilisis in</li>
									<li class="list-group-item">Morbi leo risus</li>
									<li class="list-group-item">Porta ac consectetur ac</li>
									<li class="list-group-item">Vestibulum at eros</li>
								</ul>
							</div>

							<div className="col-lg-6">
								<p className="pictures">Pictures</p>
								<img className="container photo"src={house.main_image ? house.main_image : "https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg"}/>
							</div>						
						</div>

						<div className="container location">
							<iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;output=embed"></iframe>
						</div>
					</div>

				</div>
			)
		else 
			return <div><Empty /></div>
		}
}

export default ListingDetailsView
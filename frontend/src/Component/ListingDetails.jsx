import React from 'react'
import { Row, Col, Descriptions  } from 'antd';
import { Empty } from 'antd';
import axios from 'axios'
import "../assets/listing_detailst.style.scss"
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
		if (house_d)
			return (
				<div>
					<img className="container img-container"
					src={house.main_image ? house.main_image : "https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg"}
					/>
					
					<div className="container">
						<div className="row listing_container">
							
							<div className="col">						
								<a>Open House</a>
							</div>
							
							<div className="col">
								<a>Features</a>
							</div>

							<div className="col">
								<a>Photos</a>
							</div>
							
							<div className="col">
								<a>Location</a>
							</div>
							
							<div className="col">
								<a>Contract</a>
							</div>

						</div>
					</div>

				</div>
			)
		else 
			return <div><Empty /></div>
		}
}

export default ListingDetailsView
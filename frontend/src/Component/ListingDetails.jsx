import React from 'react'
import { Row, Col, Descriptions  } from 'antd';
import { Empty } from 'antd';
import axios from 'axios'

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
					<Row>
						<Col span={24}>
							<Descriptions
								title={house.title}
								bordered
								column={{ xxl: 4, xl: 4, lg: 4, md: 2, sm: 1, xs: 1 }}
							>
								<Descriptions.Item label="Home type">{house_d.home_type}</Descriptions.Item>
								<Descriptions.Item label="Area">{house_d.area}</Descriptions.Item>
								<Descriptions.Item label="Ground area">{house_d.area_ground}</Descriptions.Item>
								<Descriptions.Item label="Bathrooms">{house_d.bathrooms}</Descriptions.Item>
								<Descriptions.Item label="Bedrooms">{house_d.bedrooms}</Descriptions.Item>
								<Descriptions.Item label="Rooms">{house_d.rooms}</Descriptions.Item>
								<Descriptions.Item label="Floor">{house_d.floors}</Descriptions.Item>
								<Descriptions.Item></Descriptions.Item>
								<Descriptions.Item label="Address">{house_d.address}</Descriptions.Item>
								<Descriptions.Item label="City">{house_d.city}</Descriptions.Item>
								<Descriptions.Item label="State">{house_d.state}</Descriptions.Item>
								<Descriptions.Item label="Zip code">{house_d.zipcode}</Descriptions.Item>
								<Descriptions.Item label="Images">
									<img style={{width: "300px"}}
									src={house.main_image ? house.main_image : "https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg"}
									/>
								</Descriptions.Item>
							</Descriptions>
						</Col>
					</Row>
				</div>
			)
		else 
			return <div><Empty /></div>
		}
}

export default ListingDetailsView
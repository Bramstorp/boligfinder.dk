import React from 'react'
import { Row, Col, Image, Descriptions  } from 'antd';
import { Empty } from 'antd';

class ListingDetailsView extends React.Component {
	render() {
		const contentStyle = {
			height: '500px',
			color: '#fff',
			lineHeight: '500px',
			textAlign: 'center',
			background: '#364d79',
		};

		if (this.props.data == null)
			window.location = "/NotFound"
		else {
			console.log(this.props.data)
			var house = this.props.data;
			var house_d = house.house;
			if (house_d)
				return (
					<div>
						<Row>
							<Col span={24}>
								<Descriptions
									title={house.title}
									bordered
									column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
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
									<Descriptions.Item></Descriptions.Item>
									<Descriptions.Item label="Images">
										<Image
										width={300}
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
}

export default ListingDetailsView
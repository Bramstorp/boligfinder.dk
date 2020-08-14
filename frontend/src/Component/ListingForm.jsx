import React from 'react'
import { Select } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';
import "../assets/ListingForm.style.scss"

const { Search } = Input;
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const ListingForm = () => (
	<div className="listform">
	    <Row className="rowform">	    
	      <Col span={2}>
	      	<h1>Sale or Rent</h1>
	      	<Select defaultValue="Sale or Rent" style={{ width: 120 }} onChange={handleChange}>
	      	</Select>
	      </Col>
	      
	      <Col span={2}>
	      	<h1>Home Types</h1>
	      	<Select defaultValue="Home Type" style={{ width: 120 }} onChange={handleChange}>
	      	</Select>
	      </Col>
	      
	      <Col span={2}>
	      	<h1>Bedrooms</h1>
	      	<Select defaultValue="Bedrooms" style={{ width: 120 }} onChange={handleChange}>
	      	</Select>
	      </Col>
	      
	      <Col span={2}>
	      	<h1>Bathrooms</h1>
	      	<Select defaultValue="Bathrooms" style={{ width: 120 }} onChange={handleChange}>
	      	</Select>
	      </Col>

	      <Col span={2}>
	      	<h1>Sqft</h1>
	      	<Select defaultValue="Sqft" style={{ width: 120 }} onChange={handleChange}>
	      	</Select>
	      </Col>
	    </Row>

	    <Row className="SecondRow">	     
	      <Col span={2}>
	      	<h1>Minimum Price</h1>
	      	<Select defaultValue="Price" style={{ width: 120 }} onChange={handleChange}>
	      	</Select>
	      </Col>
	      
	      <Col span={2}>
	      	<h1>Maximum Price</h1>
	      	<Select defaultValue="Maximum Price" style={{ width: 120 }} onChange={handleChange}>
	      	</Select>
	      </Col>
	      
	      <Col span={2}>
	      	<h1>Days Listed</h1>
	      	<Select defaultValue="Days Listed" style={{ width: 120 }} onChange={handleChange}>
	      	</Select>
	      </Col>
	      
	      <Col span={2}>
	      	<h1>Open House</h1>
	      	<Select defaultValue="Open House" style={{ width: 120 }} onChange={handleChange}>
	      	</Select>
	      </Col>	   	      
	    </Row>
	    
	    <br />
        <Search
	      placeholder="Search House"
	      enterButton="Search"
	      size="large"
	      onSearch={value => console.log(value)}
	      className="Searchbar"
	    />

    </div>
)

export default ListingForm
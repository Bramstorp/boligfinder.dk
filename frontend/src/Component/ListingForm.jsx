import React from 'react'
import { Select } from 'antd';
import "../assets/ListingForm.style.scss"

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const ListingForm = () => (
	<div className="flex-container">

	    <Select className="flex-item" defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
	      <Option value="jack">Jack</Option>
	      <Option value="lucy">Lucy</Option>
	      <Option value="Yiminghe">yiminghe</Option>
	    </Select>

	    <Select className="flex-item" defaultValue="test" style={{ width: 120 }} onChange={handleChange}>
	      <Option value="jack">Jack</Option>
	      <Option value="lucy">Lucy</Option>
	      <Option value="Yiminghe">yiminghe</Option>
	    </Select>

	   	<Select className="flex-item" defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
	      <Option value="jack">Jack</Option>
	      <Option value="lucy">Lucy</Option>
	      <Option value="Yiminghe">yiminghe</Option>
	    </Select>

	    <Select className="flex-item" defaultValue="test" style={{ width: 120 }} onChange={handleChange}>
	      <Option value="jack">Jack</Option>
	      <Option value="lucy">Lucy</Option>
	      <Option value="Yiminghe">yiminghe</Option>
	    </Select>


	    <Select className="flex-item" defaultValue="test" style={{ width: 120 }} onChange={handleChange}>
	      <Option value="jack">Jack</Option>
	      <Option value="lucy">Lucy</Option>
	      <Option value="Yiminghe">yiminghe</Option>
	    </Select>

	    <Select className="flex-item" defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
	      <Option value="jack">Jack</Option>
	      <Option value="lucy">Lucy</Option>
	      <Option value="Yiminghe">yiminghe</Option>
	    </Select>

	    <Select className="flex-item" defaultValue="test" style={{ width: 120 }} onChange={handleChange}>
	      <Option value="jack">Jack</Option>
	      <Option value="lucy">Lucy</Option>
	      <Option value="Yiminghe">yiminghe</Option>
	    </Select>

	   	<Select className="flex-item" defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
	      <Option value="jack">Jack</Option>
	      <Option value="lucy">Lucy</Option>
	      <Option value="Yiminghe">yiminghe</Option>
	    </Select>

	    <Select className="flex-item" defaultValue="test" style={{ width: 120 }} onChange={handleChange}>
	      <Option value="jack">Jack</Option>
	      <Option value="lucy">Lucy</Option>
	      <Option value="Yiminghe">yiminghe</Option>
	    </Select>


	    <Select className="flex-item" defaultValue="test" style={{ width: 120 }} onChange={handleChange}>
	      <Option value="jack">Jack</Option>
	      <Option value="lucy">Lucy</Option>
	      <Option value="Yiminghe">yiminghe</Option>
	    </Select>
	    
    </div>
)

export default ListingForm
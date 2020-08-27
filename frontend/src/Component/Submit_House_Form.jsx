import React, { useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner';
import "../assets/SubmitHouseForm.style.scss"

const HouseForm = (props) => {

    const [formData, setFormData] = useState({
    });

    const { } = formData;

    const [loading, setLoading] = useState(false);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        setLoading(true);
        axios.post("http://127.0.0.1:8000/api/listing/search", { }, config)
        .then(res => {
            setLoading(false);
            props.setListings(res.data)
            window.scrollTo(0, 0)
            console.log(res.data)
        })
        .catch(err => {
            setLoading(false)
            window.scrollTo(0, 0)
        })

    };



	return(
		<form onSubmit={e => onSubmit(e)}>

		<div className="row container row_style">

		    <label>Sale or Rent</label>
		    <select class="form-control" name='sale_type'>
		      	<option>FOR_SALE</option>
		      	<option>RENT</option>
		    </select>

		    <label className="tester" for="">Minimum Price</label>
		    <select class="form-control" name='price'>
		      	<option>200000</option>
		      	<option>500000</option>
		      	<option>750000</option>
		      	<option>1000000</option>
		      	<option>1500000</option>
		      	<option>2000000</option>
		      	<option>3000000</option>
		      	<option>5000000</option>
		      	<option>6000000</option>
		      	<option>7000000</option>
		      	<option>8000000</option>
		      	<option>9000000</option>
		      	<option>10000000</option>
		    </select>

		    <label className="tester" for="">Days Listed</label>
		    <select class="form-control">
		      	<option>1 or less</option>
		      	<option>2 or less</option>
		      	<option>5 or less</option>
		      	<option>10 or less</option>
		      	<option>15 or less</option>
		      	<option>20 or less</option>
		      	<option>30 or less</option>
		      	<option>Any</option>
		    </select>

			<label className="tester" for="">House Type</label>
				<select class="form-control" name='home_type'>
					<option>APARTMENT</option>
					<option>VILLA</option>
					<option>TERRACED_HOUSE</option>
					<option>FARM_HOUSE</option>
					<option>MANSION</option>
				</select>
				      	  

		    <label className="tester" for="">Area</label>
			    <select class="form-control" name='area'>
			      	<option>50</option>
			      	<option>80</option>
			      	<option>100</option>
			      	<option>150</option>
			      	<option>200</option>
			      	<option>250</option>
			      	<option>300</option>
			    </select>

			    <label className="tester" for="">Ground Area</label>
			    <select class="form-control" name='area_ground'>
			      	<option>500</option>
			      	<option>750</option>
			      	<option>1000</option>
			      	<option>3000</option>
			      	<option>5000</option>
			      	<option>8000</option>
			      	<option>10000</option>
			      	<option>20000</option>
			      	<option>30000</option>
			     	<option>50000</option>
			      	<option>100000</option>
			     	<option>200000</option>
			      	<option>300000</option>
			    </select>

			    <label className="tester" for="">Rooms</label>
			    <select class="form-control" name='rooms'>
			      	<option>1</option>
			      	<option>2</option>
			      	<option>3</option>
			      	<option>4</option>
			      	<option>5</option>
			      	<option>6+</option>
			    </select>

			    <label className="tester" for="">Bedrooms</label>
			    <select class="form-control" name='bedrooms'>
			      	<option>1</option>
			      	<option>2</option>
			      	<option>3</option>
			      	<option>4</option>
			      	<option>5</option>
			      	<option>6+</option>
			    </select>	      	 

	  			<label className="tester" for="">Year Build</label>
			    <select class="form-control" name="build_year">
			      	<option>1900</option>
			      	<option>1910</option>
			      	<option>1920</option>
			      	<option>1930</option>
			      	<option>1950</option>
			      	<option>1960</option>
			      	<option>1980</option>
			      	<option>1990</option>
			      	<option>2000</option>
			      	<option>2010</option>
			      	<option>2020</option>
			    </select>

	  			<label className="tester" for="">Open House</label>
			    <select class="form-control">
			      	<option>1 Day</option>
			      	<option>7 Day</option>
			      	<option>14 Days</option>
			      	<option>30 Days</option>
			      	<option>30 Days</option>
			    </select>

	  			<label className="tester" for="">Floors</label>
			    <select class="form-control" name='floors'>
			      	<option>1</option>
			      	<option>2</option>
			      	<option>3</option>
			      	<option>4</option>
			      	<option>5</option>
			      	<option>6+</option>
			    </select>

	  			<label className="tester" for="">Bathrooms</label>
			    <select class="form-control" name='bathrooms'>
			      	<option>1</option>
			      	<option>2</option>
			      	<option>3</option>
			      	<option>4</option>
			      	<option>5</option>
			      	<option>6+</option>
			    </select>

				<label className="tester" for="">Address</label>
				<input className="form-control" type="text" name='address'/>

				<button className="form-control btn-outline-success" type="submit">Save</button>

			</div>	
		</form>
		
)
}

HouseForm.propTypes = {
    setListings: PropTypes.func.isRequired
};

export default HouseForm
import React, { useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner';
import "../assets/ListingForm.style.scss"

const ListingForm = (props) => {

    const [formData, setFormData] = useState({
        sale_type: 'FOR_SALE',
        home_type: 'APARTMENT',
        price: "200000",
        address: "",
        area: "50",
        area_ground: "500",
        bedrooms: "1",
        bathrooms: "1",
        floors: "1",
        rooms: "1",
        build_year: "1910"
    });

    const { sale_type, price, address, area, area_ground, home_type, bedrooms, bathrooms, floors, rooms, build_year } = formData;

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
        axios.post("http://127.0.0.1:8000/api/listing/search", { sale_type, price, address, area, area_ground, home_type, bedrooms, bathrooms, floors, rooms, build_year }, config)
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

			{/* Row 1*/}
			<div className="row">

				<div className="col">
				    <label for="">Sale or Rent</label>
				    <select class="form-control" name='sale_type' onChange={e => onChange(e)} value={sale_type}>
				      <option>FOR_SALE</option>
				      <option>RENT</option>
				    </select>
			  	</div>

			  <div className="col">
			    <label for="">Minimum Price</label>
			    <select class="form-control" name='price' onChange={e => onChange(e)} value={price}>
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
			  </div>

			  <div className="col">
			    <label for="">Days Listed</label>
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
			  </div>

			  <div className="col">
			    <label for="">House Type</label>
			    <select class="form-control" name='home_type' onChange={e => onChange(e)} value={home_type}>
			      <option>APARTMENT</option>
			      <option>VILLA</option>
			      <option>TERRACED_HOUSE</option>
			      <option>FARM_HOUSE</option>
			      <option>MANSION</option>
			    </select>
			  </div>		      	  
		  	</div>

		  	<br />

		  	{/* Row 2*/}
		  	<div className="row">

				<div className="col">
			    <label for="">Area</label>
			    <select class="form-control" name='area' onChange={e => onChange(e)} value={area}>
			      <option>50</option>
			      <option>80</option>
			      <option>100</option>
			      <option>150</option>
			      <option>200</option>
			      <option>250</option>
			      <option>300</option>
			    </select>
			  </div>

			  <div className="col">
			    <label for="">Ground Area</label>
			    <select class="form-control" name='area_ground' onChange={e => onChange(e)} value={area_ground}>
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
			  </div>

			  <div className="col">
			    <label for="">Rooms</label>
			    <select class="form-control" name='rooms' onChange={e => onChange(e)} value={rooms}>
			      <option>1</option>
			      <option>2</option>
			      <option>3</option>
			      <option>4</option>
			      <option>5</option>
			      <option>6+</option>
			    </select>
			  </div>

			  <div className="col">
			    <label for="">Bedrooms</label>
			    <select class="form-control" name='bedrooms' onChange={e => onChange(e)} value={bedrooms}>
			      <option>1</option>
			      <option>2</option>
			      <option>3</option>
			      <option>4</option>
			      <option>5</option>
			      <option>6+</option>
			    </select>
			  </div>		      	  
		    </div>

		    <br />

		    {/* Row 3*/}
		  	<div className="row">

		  		<div className="col">
		  			<label for="">Year Build</label>
				    <select class="form-control" name="build_year" onChange={e => onChange(e)} value={build_year}>
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
				</div>

				<div className="col">
		  			<label for="">Open House</label>
				    <select class="form-control">
				      <option>1 Day</option>
				      <option>7 Day</option>
				      <option>14 Days</option>
				      <option>30 Days</option>
				      <option>30 Days</option>
				    </select>
				</div>

				<div className="col">
		  			<label for="">Floors</label>
				    <select class="form-control" name='floors' onChange={e => onChange(e)} value={floors}>
				      <option>1</option>
				      <option>2</option>
				      <option>3</option>
				      <option>4</option>
				      <option>5</option>
				      <option>6+</option>
				    </select>
				</div>

				<div className="col">
		  			<label for="">Bathrooms</label>
				    <select class="form-control" name='bathrooms' onChange={e => onChange(e)} value={bathrooms}>
				      <option>1</option>
				      <option>2</option>
				      <option>3</option>
				      <option>4</option>
				      <option>5</option>
				      <option>6+</option>
				    </select>
				</div>
			</div>

			<br />

			{/* Row 4*/}
		  	<div className="row">
		  		<div className="col">
					<label for="">Address</label>
					<input className="form-control" type="text" name='address' onChange={e => onChange(e)} value={address}/>
				</div>

				<div className="button col">
					<button className="form-control btn btn-outline-success" type="submit">Search</button>
				</div>
		  	</div>
		</form>
		
)
}

ListingForm.propTypes = {
    setListings: PropTypes.func.isRequired
};

export default ListingForm
import React, { useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner';
import "../assets/ListingForm.style.scss"

const ListingForm = (props) => {

    const [formData, setFormData] = useState({
        sale_type: 'FOR_SALE',
        price: "200000",
        address: "frema vej 21",
        area: "50",
        area_ground: "500",
    });

    const { sale_type, price, address, area, area_ground } = formData;

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
        axios.post("http://127.0.0.1:8000/api/listing/search", { sale_type, price, address, area, area_ground }, config)
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
					  <option>Sale or Rent</option>
				      <option>FOR_SALE</option>
				      <option>Rent</option>
				    </select>
			  	</div>

			  <div className="col">
			    <label for="">Minimum Price</label>
			    <select class="form-control" name='price' onChange={e => onChange(e)} value={price}>
			      <option>Minimum Price</option>
			      <option>200000</option>
			      <option>500.000</option>
			      <option>750.000</option>
			      <option>1.000.000</option>
			      <option>1.500.000</option>
			      <option>2.000.000</option>
			      <option>3.000.000</option>
			      <option>5.000.000</option>
			      <option>6.000.000</option>
			      <option>7.000.000</option>
			      <option>8.000.000</option>
			      <option>9.000.000</option>
			      <option>10.000.000</option>
			    </select>
			  </div>

			  <div className="col">
			    <label for="">Days Listed</label>
			    <select class="form-control">
			      <option>Days Listed</option>
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
			    <select class="form-control">
			      <option>House Type</option>
			      <option>Apartment</option>
			      <option>Villa</option>
			      <option>Terraced House</option>
			      <option>Farm House</option>
			      <option>Mansion</option>
			    </select>
			  </div>		      	  
		  	</div>

		  	<br />

		  	{/* Row 2*/}
		  	<div className="row">

				<div className="col">
			    <label for="">Area</label>
			    <select class="form-control" name='area' onChange={e => onChange(e)} value={area}>
			      <option>Area</option>
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
			      <option>Ground Area</option>
			      <option>500</option>
			      <option>750</option>
			      <option>1000</option>
			      <option>3000</option>
			      <option>5000</option>
			      <option>8000</option>
			      <option>10.000</option>
			      <option>20.000</option>
			      <option>30.000</option>
			      <option>50.000</option>
			      <option>100.000</option>
			      <option>200.000</option>
			      <option>300.000</option>
			    </select>
			  </div>

			  <div className="col">
			    <label for="">Rooms</label>
			    <select class="form-control">
			      <option>Rooms</option>
			      <option>1</option>
			      <option>2</option>
			      <option>3</option>
			      <option>4</option>
			      <option>5</option>
			      <option>6+</option>
			    </select>
			  </div>

			  <div className="col">
			    <label for="">Floors</label>
			    <select class="form-control">
			      <option>Floors</option>
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
				    <select class="form-control">
				      <option>Year Build</option>
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
				      <option>Days</option>
				      <option>1 Day</option>
				      <option>7 Day</option>
				      <option>14 Days</option>
				      <option>30 Days</option>
				    </select>
				</div>

				<div className="button col">
					<button className="form-control btn btn-outline-success" type="submit">Search</button>
				</div>


				<div className="col">
					<label for="">Address</label>
					<input className="form-control" type="text" name='address' onChange={e => onChange(e)} value={address}/>
				</div>

			</div>
		</form>
		
)
}

ListingForm.propTypes = {
    setListings: PropTypes.func.isRequired
};

export default ListingForm
import React, { useState, useEffect  } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import Loader from 'react-loader-spinner';
import "../assets/SubmitHouseForm.style.scss"

const HouseForm = ({ setAlert, props }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        address: '',
        city: '',
        state: "",
        zipcode: "",
        rooms: "",
        bedrooms: "",
        bathrooms: "",
        area: "",
        area_ground: "",
        floors: "",
        build_year: "",
        home_type: ""
    });

    const { address, city, state, zipcode, rooms, bedrooms, bathrooms, area, area_ground, floors, build_year, home_type  } = formData;

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
        axios.post("http://localhost:8000/api/listing/house", { address, city, state, zipcode, rooms, bedrooms, bathrooms, area, area_ground, floors, build_year, home_type  }, config)
        .then(res => {
        	setAlert('House added', 'success');
            setLoading(false);
            window.scrollTo(0, 0)
            window.location("/")           
        })
        .catch(err => {
        	setAlert('Error House was not added', 'error');
            setLoading(false)
            window.scrollTo(0, 0)
        })

    };



	return(
		<form className="form-horizontal container former" onSubmit={e => onSubmit(e)}>
			<h2 className="house_title">Add House</h2>

			<div className="form-group row">
		    	<label className="col-sm-2 col-form-label">Address:</label>		  
			  	<div className="col-sm-10">
			    	<input className="form-control" type="text" name="address" onChange={e => onChange(e)} value={address}/>		    
			  	</div>
			</div>

			<div className="form-group row">
		    	<label className="col-sm-2 col-form-label">City:</label>		  
			  	<div className="col-sm-10">
			    	<input type="text" className="form-control" name="city" onChange={e => onChange(e)} value={city}/>		    
			  	</div>
			</div>

			<div className="form-group row">
		    	<label className="col-sm-2 col-form-label">State:</label>		  
			  	<div className="col-sm-10">
			    	<input className="form-control" type="text" name="state" onChange={e => onChange(e)} value={state}/>		    
			  	</div>
			</div>

			<div className="form-group row">
		    	<label className="col-sm-2 col-form-label">Zipcode:</label>		  
			  	<div className="col-sm-5">
			    	<input className="form-control" type="number" name="zipcode" onChange={e => onChange(e)} value={zipcode}/>		    
			  	</div>
			</div>

			<div className="form-group row">
		    	<label className="col-sm-2 col-form-label">Rooms:</label>		  
			  	<div className="col-sm-5">
			    	<input type="number" className="form-control" name="rooms" onChange={e => onChange(e)} value={rooms}/>		    
			  	</div>
			</div>

			<div className="form-group row">
		    	<label className="col-sm-2 col-form-label">Bedrooms:</label>		  
			  	<div className="col-sm-5">
			    	<input className="form-control" type="number" name="bedrooms" onChange={e => onChange(e)} value={bedrooms}/>		    
			  	</div>
			</div>

			<div className="form-group row">
		    	<label className="col-sm-2 col-form-label">Bathrooms:</label>		  
			  	<div className="col-sm-5">
			    	<input className="form-control" type="number" name="bathrooms" onChange={e => onChange(e)} value={bathrooms}/>		    
			  	</div>
			</div>

			<div className="form-group row">
		    	<label className="col-sm-2 col-form-label">Area:</label>		  
			  	<div className="col-sm-5">
			    	<input className="form-control" type="number" name="area" onChange={e => onChange(e)} value={area}/>		    
			  	</div>
			</div>

			<div className="form-group row">
		    	<label className="col-sm-2 col-form-label">Area Ground:</label>		  
			  	<div className="col-sm-5">
			    	<input className="form-control" type="number" name="area_ground" onChange={e => onChange(e)} value={area_ground}/>		    
			  	</div>
			</div>

			<div className="form-group row">
		    	<label className="col-sm-2 col-form-label">Floors:</label>		  
			  	<div className="col-sm-5">
			    	<input className="form-control" type="number" name="floors" onChange={e => onChange(e)} value={floors}/>		    
			  	</div>
			</div>

			<div className="form-group row">
		    	<label className="col-sm-2 col-form-label">Build Year:</label>		  
			  	<div className="col-sm-5">
			    	<input className="form-control" type="number" name="build_year" onChange={e => onChange(e)} value={build_year}/>		    
			  	</div>
			</div>

			<div className="form-group row">
		    	<label className="col-sm-2 col-form-label">House Type:</label>		  
			  	<div className="col-sm-6">
    				<select class="form-control" name='home_type' onChange={e => onChange(e)} value={home_type}>
			      		<option>APARTMENT</option>
			      		<option>VILLA</option>
			      		<option>TERRACED_HOUSE</option>
			      		<option>FARM_HOUSE</option>
			      		<option>MANSION</option>
			    	</select>	    
			  	</div>
			</div>


            <div className="form-group row">
				{loading ?
					
				<div className='contact__form__loader'>                  
					<Loader type="Circles" color="#00BFFF" height={80} width={80} />	 
				</div> :

			  	<div className="col-sm-2"> 
			    	<button className="form-control btn btn-primary" type="submit">Save</button>		    
			  	</div> 
							
				}
			</div>

		</form>
		
	)
}

HouseForm.propTypes = {
    setAlert: PropTypes.func.isRequired
}

export default connect(null, { setAlert })(HouseForm)

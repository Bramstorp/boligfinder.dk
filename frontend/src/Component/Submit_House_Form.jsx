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
		<form className="form-horizontal container former" onSubmit={e => onSubmit(e)}>
			<h2 className="house_title">Add House</h2>

			<div className="form-group row">
		    	<label className="col-sm-2 control-label">Address:</label>		  
			  	<div className="col-sm-10">
			    	<input name="title" className="form-control" type="text" value=""/>		    
			  	</div>
			</div>

			<div className="form-group row">
		    	<label className="col-sm-2 control-label">City:</label>		  
			  	<div className="col-sm-10">
			    	<input name="title" className="form-control" type="text" value=""/>		    
			  	</div>
			</div>

		</form>
		
)
}

HouseForm.propTypes = {
    setListings: PropTypes.func.isRequired
};

export default HouseForm
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css'

const Contactpage = ({ setAlert }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const { name, email, subject, message } = formData;

    const [loading, setLoading] = useState(false);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        setLoading(true)
        axios.post("http://127.0.0.1:8000/api/contact/", { name, email, subject, message }, config)
        .then(res => {
            setAlert('Message Sent', 'success')
            setLoading(false)
            window.scrollTo(0, 0)
            window.location = "/"
        })
        .catch(err => {
            setAlert('Error with Sending Message', 'error');
            setLoading(false);
            window.scrollTo(0, 0);
        })
    };

	return(
			<div className="container">
			  	
			  	<div className="container mt-4 mb-3">
			  		<h1>Contact Page</h1>
			  	</div>		  
			  	
			  	<div className="row msg-row">

				    <div className="col-lg-8 mb-4">
				      <iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;output=embed"></iframe>
				    </div>

				    <div className="col-lg-4 mb-4">
				      	<h3>Contact Details</h3>
				      	<p>3481 Melrose Place<br />Beverly Hills, CA 90210<br /></p>
				      
				      	<p>
				        <abbr title="Phone">P</abbr>: (123) 456-7890
				      	</p>

				      	<p>
				        	<abbr title="Email">E</abbr>:
				        	<a href=""> name@example.com
				        	</a>
				      	</p>

				      	<p>
				        	<abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM
				      	</p>

				    </div>

		  		</div>

			  	<div className="row msg-row">
			    	<div className="col-lg-8 mb-4">
			      	<h3>Send us a Message</h3>
			      
			      	<form onSubmit={e => onSubmit(e)}>
			        	<div className="control-group form-group">
			          
				          	<div className="controls">
				            	<label>Full Name:</label>
				            	<input type="text" className="form-control" name="name" onChange={e => onChange(e)} value={name} required data-validation-required-message="Please enter your name."/>
				            	<p className="help-block"></p>
				          	</div>

			        	</div>

			        	<div className="control-group form-group">
			          	
				          	<div className="controls">
				            	<label>Email Address:</label>
				            	<input type="email" name="email" onChange={e => onChange(e)} value={email} className="form-control" required data-validation-required-message="Please enter your email address."/>
				        	</div>

			        	</div>

				        <div className="control-group form-group">
				          
				          	<div className="controls">
				            	<label>Subject</label>
				            	<input type="subject" name="subject" onChange={e => onChange(e)} value={subject} className="form-control" required data-validation-required-message="Please enter your email address."/>
				          	</div>

				        </div>

			        	<div className="control-group form-group">
			          
				          	<div className="controls">
				            	<label>Message:</label>
				            	<textarea type="message" name="message" onChange={e => onChange(e)} value={message} rows="10" cols="100" className="form-control" required data-validation-required-message="Please enter your message" maxlength="999"></textarea>
				          	</div>

			        	</div>

			        	<button type="submit" className="btn btn-primary">Send Message</button>
			      	</form>
			      
			    </div>

		  	</div>
		</div>
		)
}

Contactpage.propTypes = {
    setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(Contactpage);
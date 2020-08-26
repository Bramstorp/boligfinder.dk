import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Contactpage = () => (
	<div className="container">
	  
	  <h1 className="mt-4 mb-3">Contact Page</h1>

	  <div className="row">
	    
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
	  <div className="row">
	    <div className="col-lg-8 mb-4">
	      <h3>Send us a Message</h3>
	      
	      <form>
	        <div className="control-group form-group">
	          <div className="controls">
	            <label>Full Name:</label>
	            <input name="fullname" type="text" className="form-control" id="name" required data-validation-required-message="Please enter your name."/>
	            <p className="help-block"></p>
	          </div>

	        </div>

	        <div className="control-group form-group">
	          	<div className="controls">
	            	<label>Phone Number:</label>
	            	<input name="phone" type="tel" className="form-control" id="phone" required data-validation-required-message="Please enter your phone number."/>
	        	</div>
	        </div>

	        <div className="control-group form-group">
	          <div className="controls">
	            <label>Email Address:</label>
	            <input name="email" type="email" className="form-control" id="email" required data-validation-required-message="Please enter your email address."/>
	          </div>
	        </div>

	        <div className="control-group form-group">
	          <div className="controls">
	            <label>Message:</label>
	            <textarea name="message" rows="10" cols="100" className="form-control" id="message" required data-validation-required-message="Please enter your message" maxlength="999"></textarea>
	          </div>
	        </div>

	        <div id="success"></div>

	        <button type="submit" className="btn btn-primary">Send Message</button>
	      </form>
	      
	    </div>
	  </div>
	</div>
)

export default Contactpage
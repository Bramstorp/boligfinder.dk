import React from 'react'
import "../assets/ListingForm.style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

const ListingForm = () => (
<div className="container">

	<form>

		{/* Row 1*/}
		<div className="row">

			<div className="col">
		    <label for="">Sale or Rent</label>
		    <select class="form-control">
		      <option>1</option>
		    </select>
		  </div>

		  <div className="col">
		    <label for="">Minimum Price</label>
		    <select class="form-control">
		      <option>1</option>
		    </select>
		  </div>

		  <div className="col">
		    <label for="">Maximum Price</label>
		    <select class="form-control">
		      <option>1</option>
		    </select>
		  </div>

		  <div className="col">
		    <label for="">House Type</label>
		    <select class="form-control">
		      <option>1</option>
		    </select>
		  </div>		      	  
	  </div>

	  <br />

		{/* Row 2*/}
	  <div className="row">

			<div className="col">
		    <label for="">Sqft</label>
		    <select class="form-control">
		      <option>1</option>
		    </select>
		  </div>

		  <div className="col">
		    <label for="">Bathrooms</label>
		    <select class="form-control">
		      <option>1</option>
		    </select>
		  </div>

		  <div className="col">
		    <label for="">Bedrooms</label>
		    <select class="form-control">
		      <option>1</option>
		    </select>
		  </div>

		  <div className="col">
		    <label for="">Days Listed</label>
		    <select class="form-control">
		      <option>1</option>
		    </select>
		  </div>		      	  
	  </div>
	</form>

	<br />
  <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
  <br />
  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>


</div>
)

export default ListingForm
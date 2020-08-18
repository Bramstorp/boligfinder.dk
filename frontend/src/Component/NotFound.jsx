import React from 'react'
import "../assets/NotFound.style.scss"

const NotFound = () => (
	<div className="container">
	    <div className='notfound'>
	        <h1 className='notfound__heading'>404 Not Found</h1>
	        <p className='notfound__paragraph'>The link you requested does not exist on our website.</p>
	    </div>
    </div>
);

export default NotFound;
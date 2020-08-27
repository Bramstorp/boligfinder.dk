import React from 'react'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import "../assets/Navbar.style.scss"
import {NavDropdown} from 'react-bootstrap';

const Logout = () =>{
	var token = localStorage.getItem('token');
	var agent = localStorage.getItem('agent');
	if (token != null && token) {

		if (agent)
			return (
				<div>
					<div style={{display : 'inline-block'}}>
						<NavDropdown title="Submit">
							<NavDropdown.Item href="/submit_house">Create House</NavDropdown.Item>
							<NavDropdown.Item href="/submit_listing">Create Listing</NavDropdown.Item>
							<NavDropdown.Item href="">View Houses</NavDropdown.Item>
							<NavDropdown.Item href="">View Listings</NavDropdown.Item>
						</NavDropdown>
					</div>
					<div style={{display : 'inline-block'}}>
						<Link className='navbar__item' to='/logout'>Logout</Link>
					</div>
				</div>
			)
		else
			return <Link className='navbar__item' to='/logout'>Logout</Link>
	}
	else{
		return (
			<div>
				<div style={{display : 'inline-block'}}>
					<Link className='navbar__item' to='/signin'>Login</Link>
				</div>
				<div style={{display : 'inline-block'}}>
					<NavDropdown title="Sign up">
						<NavDropdown.Item href="/signup">User</NavDropdown.Item>
						<NavDropdown.Item href="/signupagent">Agent</NavDropdown.Item>
					</NavDropdown>
				</div>						
			</div>   
		)
	}
}

class Navbar extends React.Component {
	render() {
		return(			
		    <header className='navbar'> 
		    	<div className='container'>	
		        <Link className='navbar__title navbar__item' to='/'>BoligFinder</Link>
		        <Link className='navbar__item' to='/'>Home</Link>
		        <Link className='navbar__item' to='/Listing'>Listing</Link>
		        <Link className='navbar__item' to='/contact'>Contact</Link>
		        <Link className='navbar__item' to='/about'>About</Link>   
		        <Logout />
		        </div>
		    </header>	    
	    )
    }
}

export default Navbar
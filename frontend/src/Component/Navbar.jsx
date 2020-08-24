import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "../assets/Navbar.style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Logout(){
	var token = localStorage.getItem('token');
	if (token != null && token) return <Link className='navbar__item' to='/logout'>Logout</Link>
	else{
		return (
			<div>
				<Link className='navbar__item' to='/signin'>Login</Link> 
				<Link className='navbar__item' to='/signup'>Sign up</Link> 
			</div>   
		)
	}
}

class Navbar extends React.Component {
	render() {
		return(
		    <header className='navbar'> 	
		        <Link className='navbar__title navbar__item' to='/'>BoligFinder</Link>
		        <Link className='navbar__item' to='/'>Home</Link>
		        <Link className='navbar__item' to='/Listing'>Listing</Link>
		        <Link className='navbar__item' to='/contact'>Contact</Link>
		        <Link className='navbar__item' to='/about'>About</Link>   
		        <Logout />
		    </header>
	    )
    }
}

export default Navbar
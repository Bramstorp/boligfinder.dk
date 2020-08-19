import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "../assets/Navbar.style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Navbar extends React.Component {
	render() {
		return(
		    <header className='navbar'> 	
		        <Link className='navbar__title navbar__item' to='/'>BoligFinder</Link>
		        <Link className='navbar__item' to='/'>Home</Link>
		        <Link className='navbar__item' to='/contact'>Contact</Link>
		        <Link className='navbar__item' to='/about'>About</Link>   
		        <Link className='navbar__item' to='/signin'>Login</Link> 
		        <Link className='navbar__item' to='/signup'>Sign up</Link>      
		    </header>
	    )
    }
}

export default Navbar
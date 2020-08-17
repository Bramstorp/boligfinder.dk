import React from 'react'
import "../assets/Navbar.style.scss"

const Navbar = () => (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>BoligFinder</div>
        <div className='navbar__item'>Home</div>
        <div className='navbar__item'>Contact</div>
        <div className='navbar__item'>About</div>   
        <div className='navbar__item'>Login</div> 
        <div className='navbar__item'>Sign up</div>      
    </header>
)

export default Navbar
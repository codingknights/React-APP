import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link as ReactLink } from 'react-router-dom';
const Navbar = function(){

const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

const closeMenu = () => setClick(false)

return (
    <div className='header'>
        <nav className='navbar'>
        <a href='/http://localhost:3001/' className='logo'>
            <h1 className="webname">LAPTOP MAN</h1> </a>
        <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                    : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

        </div>
        
            <ul className={click ? "nav-menu active" : "nav-menu" } >
                <li className='nav-item' >
                    <ReactLink to="/">Home</ReactLink>
                </li>
                <li className='nav-item'>
                    <ReactLink to="/about">About</ReactLink>
                </li>
                
                <li className="registration nav-item">
                    <button type="button" style={{"padding-right":"5px"}} class="btn btn-outline-light me-2">Login</button>
                    <button type="button" style={{"padding-left":"5px"}} class="btn btn-warning">Sign-up</button>
                </li>
            </ul>
            <ReactLink to="/signup" s><button tyle={{"margin-left":"220px"}} class="glow-on-hover registration2" >Do we know you?</button></ReactLink>
           
         </nav>
     </div>
)
}

export default Navbar
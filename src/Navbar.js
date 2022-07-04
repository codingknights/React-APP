import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

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
                    <a href='/' >Home</a>
                </li>
                <li className='nav-item'>
                    <a href='#about' >About</a>
                </li>
                <li className='nav-item'>
                    <a href='#testimonials' >Products</a>
                </li>
                
                <li className="registration nav-item">
                    <button type="button" style={{"padding-right":"5px"}} class="btn btn-outline-light me-2">Login</button>
                    <button type="button" style={{"padding-left":"5px"}} class="btn btn-warning">Sign-up</button>
                </li>
            </ul>
            <button type="button" style={{"margin-left":"170px"}}  class="btn btn-outline-light me-2 registration2">Login</button>
            <button type="button" class="glow-on-hover registration2">Sign-up</button>
         </nav>
     </div>
)
}

export default Navbar
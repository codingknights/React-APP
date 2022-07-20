import React, { useState } from 'react'
import { Link as ReactLink } from 'react-router-dom';

function  Navbar2(){
return (
    <div className='header'>
        <nav className='navbar'>
        <a href='/' className='logo'>
            <h1 className="webname">LAPTOP MAN</h1> </a>
        
            <ReactLink to="/" s><button  class="glow-on-hover" >Home</button></ReactLink>
           
         </nav>
     </div>
)
}

export default Navbar2
import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'


function App() {
  return (
    <div>
      <Navbar />
      <Hero className="container" />
      <Footer></Footer>
    </div>
  );
}

export default App;
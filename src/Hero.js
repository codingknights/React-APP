import React from 'react'
import Modal from './Modal'
const Hero = () => {
  return (
    <div style={{ "padding-top": "90px" }} >
      <div className="container position-relative overflow-hidden p-3 p-md-5 text-center gamebg">
        <div className="col-md-5 p-lg-5 mx-auto my-5 ">
          <h1 className="display-4 fw-normal text-white">Gaming Laptops</h1>
          <p className="lead fw-normal text-white">A gaming laptop is a small and mobile personal computer, which has a built-in
            screen
            and is specifically designed to enable gaming on the move and in spaces where you
            don’t have access to a desk.</p>
           <Modal></Modal>
        </div>

      </div>
      <div className="container position-relative overflow-hidden p-3 p-md-5 text-center officebg">
        <div className="col-md-5 p-lg-5 mx-auto my-5 ">
          <h1 className="display-4 fw-normal text-white">Professional Laptops</h1>
          <p className="lead fw-normal text-white">Business laptops are designed for portability and long periods of use. A
            business laptop
            receives a higher-quality product with additional built-in components that can last for
            years.</p>
          <a className="btn btn-outline-secondary text-white" href="#">Read more</a>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      <div className="container position-relative overflow-hidden p-3 p-md-5 text-center homelapbg">
        <div className="col-md-5 p-lg-5 mx-auto my-5 ">
          <h1 className="display-4 fw-normal text-white">Home Laptops</h1>
          <p className="lead fw-normal text-white">Home laptops are battery- or AC-powered personal computers generally smaller
            than
            briefcases that can easily be transported and conveniently used in temporary spaces.</p>
          <a className="btn btn-outline-secondary text-white" href="#">Read more</a>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

    </div>
  )
}

export default Hero
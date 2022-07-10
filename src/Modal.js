import React from "react";
import Corousel from "./Corousel";
import SignUp from "./SignUp";
import SignIn from "./SignIn"
function Modal() {

    return (
        <React.Fragment >
            <button type="button" className="btn btn-outline-light me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
            View
          </button>

          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title webname" id="exampleModalLabel">GAMING LAPTOPS</h4>
                  <button type="button" className="btn-close light" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <Corousel></Corousel>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-warning">Load More</button>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title webname" id="exampleModalLabel">SignUp</h4>
                  <button type="button" className="btn-close light" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <SignUp></SignUp>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" className="btn btn-warning">SignUp</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title webname" id="exampleModalLabel">Login</h4>
                  <button type="button" className="btn-close light" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <SignIn></SignIn>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" className="btn btn-warning">Login</button>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
    )
}
export default Modal 
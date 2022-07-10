import {useState} from 'react'
import React from 'react';
import Cards from './Cards'


const DemoData = require('./DemoData.js')

function Corousel() {
    let [loadingState, setLoadingState] = useState(false);
    return (
        <div id="carouselExampleControls" className="carousel slide" >
            <div className="carousel-inner">
                 
                    {DemoData.map(
                        function (arr) {
                            return (
                                <div className="carousel-item active">
                                    { loadingState!==true &&
                                <Cards
                                    className="d-block w-100 container"
                                    title={arr.title}
                                    description={arr.processor}
                                ></Cards>
                            }
                            {loadingState===true && 
                            <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>}
                                </div>
                            )
                        }
                    )
                    }
            

                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Corousel
import { useState } from 'react'
import React from 'react';
import Cards from './Cards'
import { PromiseProvider } from 'mongoose';


const GamingLap = require('./GamingLap.js')

function Corousel() {
    let [loadingState, setLoadingState] = useState(false);
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active text-white" >
                Gaming laptops
            </div>
                {GamingLap.map(
                    function (arr) {
                        return (
                            <React.Fragment>
                                <div className="carousel-item">
                                    {loadingState !== true &&
                                        <Cards
                                            className="d-block w-100 container"
                                            title={arr.Brand}
                                            description={arr.ProductNo}
                                            image={arr.image}
                                            ram={arr.RAM}
                                            storage={arr.StorageAmount}
                                            linka={arr.AmazonLink}
                                            linkb={arr.OtherLink}
                                            ProcessorBrand={arr.ProcessorBrand}
                                            ProcessorInfo={arr.ProcessorInfo}
                                            ScreenSize={arr.ScreenSize}
                                            RefreshRate={arr.RefreshRate}
                                            ScreenResolution={arr.ScreenResolution}
                                            GPUBrand={arr.GPUBrand}
                                            GPUInfo={arr.GPUInfo}
                                            GPURAM={arr.GPURAM}
                                            StorageType={arr.StorageType}
                                            BatteryCapacity={arr.BatteryCapacity}
                                            Charger={arr.Charger}
                                            Dimension={arr.Dimension}
                                            Weight={arr.Weight}
                                        ></Cards>
                                        
                                    }
                                </div>
                            </React.Fragment>
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
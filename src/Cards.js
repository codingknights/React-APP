import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
function Cards(props) {
    return (
        <React.Fragment>
            <div className="containerCard">
                <div className="card" style={{ 'inset': '2px', 'position': 'absolute', 'border-radius': '0px' }}>
                    <img src={props.image} style={{ "height": "230px", "width": "auto" }} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-white">{props.title}{props.ProductNo}</h5>
                        <p className="card-text text-white">{props.description}</p>
                        <p className="card-text text-white">{props.storage}</p>
                        <p className="card-text text-white">{props.ram}</p>
                        <div>
                            <a href={props.linka} style={{ "margin-right": "5px" }} target="_blank" className="btn btn-danger">Amazon</a>
                            <a href={props.linkb} style={{ "margin-left": "5px" }} target="_blank" className="btn btn-danger">Other</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion" id="accordionPanelsStayOpenExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                       <div style={{"margin-left":"45%"}} >More Info</div>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div class="accordion-body">
                                        <table class="table table-striped table-dark" >
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Brand</th>
                                                    <td>{props.title}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Product No</th>
                                                    <td>{props.description}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">RAM</th>
                                                    <td>{props.ram}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Processor</th>
                                                    <td>{props.ProcessorBrand}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Processor Details</th>
                                                    <td>{props.ProcessorInfo}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Screen Size</th>
                                                    <td>{props.ScreenSize}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Display Size</th>
                                                    <td>{props.ScreenSize}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Display Refresh Rate </th>
                                                    <td>{props.RefreshRate}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Resolution</th>
                                                    <td>{props.Resolution}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Graphics</th>
                                                    <td>{props.GPUBrand}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">GPU Type</th>
                                                    <td>{props.GPUInfo}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">GPU Memory</th>
                                                    <td>{props.GPURAM}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Storage Type</th>
                                                    <td>{props.StorageType}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Battery Capacity</th>
                                                    <td>{props.BatteryCapacity}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Power Adapter</th>
                                                    <td>{props.Charger}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Dimension</th>
                                                    <td>{props.Dimension}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Weight </th>
                                                    <td>{props.Weight}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
        </React.Fragment>
    )
}
export default Cards;
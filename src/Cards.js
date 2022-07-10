import React from 'react';
function Cards(props) {
    return (
        <React.Fragment>
        <div className="containerCard">
            <div className="card" style={{'inset':'2px', 'position': 'absolute', 'border-radius':'0px'}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-white">{props.title}</h5>
                    <p className="card-text text-white">{props.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
export default Cards;
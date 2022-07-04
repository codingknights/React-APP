function Cards() {
    return (
        <div className="containerCard">
            <div className="card" style={{'inset':'2px', 'position': 'absolute', 'border-radius':'0px'}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
export default Cards;
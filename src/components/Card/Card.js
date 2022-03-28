import React from 'react';

const Card = (props) => {
    const { name, price } = props.product
    return (
        <div>
            <div className="col">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">price: {price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
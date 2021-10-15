import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { img, name, price, description } = service;
    return (
        <div className="service">
            <img className="p-3" src={img} alt="" />
            <h1>{name}</h1>
            <p className="px-3">{description}</p>
            <h5>{price}</h5>
        </div>
    );
};

export default Service;
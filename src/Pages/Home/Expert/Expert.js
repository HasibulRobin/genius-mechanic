import React from 'react';

const Expert = ({ expert }) => {
    const { img, name, expertize } = expert;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <img style={{ width: "350px" }} src={img} alt="" />
            <h1>{name}</h1>
            <h2 className="text-danger">{expertize}</h2>
        </div>
    );
};

export default Expert;
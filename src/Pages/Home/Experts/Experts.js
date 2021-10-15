import React from 'react';
import Expert from '../Expert/Expert'

import mechanic1 from '../../../images/mechanic/mechanic1.jpg'
import mechanic2 from '../../../images/mechanic/mechanic2.jpg'
import mechanic3 from '../../../images/mechanic/mechanic3.jpg'
import mechanic4 from '../../../images/mechanic/mechanic4.webp'
import mechanic5 from '../../../images/mechanic/mechanic5.jpg'

const experts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic2,
        name: 'Jonas Smith',
        expertize: '-Polish Expert-'
    },
    {
        img: mechanic3,
        name: 'Ahmed Reja',
        expertize: '-Wheel Expert-'
    },
    {
        img: mechanic4,
        name: 'Selim Mahmud',
        expertize: '-Coloring Expert-'
    },
    {
        img: mechanic5,
        name: 'Aaa ching chu',
        expertize: '-Glass repairing Expert-'
    }
]

const Experts = () => {
    return (
        <div className="container">
            <h2 className="text-primary mt-5">Our Experts</h2>
            <div className="row">

                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;
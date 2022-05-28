import React from 'react';
import { NavLink } from 'react-router-dom';

const items = [
    {
        name: "Fruits and Vegetables",
        link: "/fruits-vegetables",
    },
    {
        name: "Foodgrains and Spices",
        link: "/foodgrains-spices",
    },
    {
        name: "Snacks and Bakery",
        link: "/snacks-bakery",
    },
    {
        name: "Beauty and Healthcare",
        link: "/beauty-healthcare",
    },
    {
        name: "Cleaning and Household",
        link: "/cleaning-household",
    }
]

function Sidebar({navOpen}) {

    return (
        <div className="Sidebar">
            <div className={navOpen? 'navigation-bar active': 'navigation-bar'}>
                <ul className='nav-list'>
                    {items?.map((item) => (
                        <NavLink className='links' to={item.link} key={item.name}>
                            <li>{item.name}</li>
                        </NavLink>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;

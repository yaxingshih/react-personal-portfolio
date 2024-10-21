import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from "../data";
import './navbar.css';

const Navbar = () => {
    const  [showMenu, setShowMenu] = useState(false);
    return (
    // <nav className="bg-blue-900 mb-20 flex items-center justify-between py-6">
    //     <div className="flex flex-shrink-0 items-center">
    //         <img src={logo} alt="logo"></img>
    //         <div>test</div>
    //     </div>
    // </nav>
    <nav className="nav">
        <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
            <ul className="nav__class">
            {links.map(({name, icon, path}, index) => {
                    return (
                        <li className="nav__item" key = {index}>
                            <NavLink to={path} className={({isActive}) => isActive ? 'active-nav nav__link' : 'nav__link'}>
                                {icon}
                                <h3 className="nav__name">{name}</h3>
                            </NavLink>
                            
                        </li>
                    );
                })}
            </ul>
        </div>
        <div className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`} onClick={() => setShowMenu(!showMenu)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
  )
}

export default Navbar

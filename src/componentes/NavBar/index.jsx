import React from "react";
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';

export const navBar = () => {
    return(
        <div className='container'>
            <nav className='nav'>
                <div className='nav_brand'>
                    <NavLink className="Nav_Link" to='/' >Botines Mecha </NavLink>
                </div>
                <ul className='nav_link'>
                    <li>
                        <NavLink className="Nav_Link" to='/categoria/botines_nike'>Nike </NavLink>
                    </li>
                    <li>
                        <NavLink className="Nav_Link" to='/categoria/botines_adidas'>Adidas </NavLink>
                    </li>
                    <li>
                        <NavLink className="Nav_Link" to='cart'>
                            <CartWidget />
                        </NavLink>
                    </li>



                </ul>

            </nav>

        </div>
    );
}

export default navBar;
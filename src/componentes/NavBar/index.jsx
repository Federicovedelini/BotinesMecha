import React from 'react';

export const navBar = () => {
    return(
        <div className='container'>
            <nav className='nav'>
                <div className='nav_brand'>
                    <a className='nav_link' href='#'>Botines Mecha</a>
                </div>
                <ul className='nav_link'>
                    <li>
                        <a className='nav_link' href="#">Categoria 1</a>
                    </li>
                    <li>
                        <a className='nav_link' href="#">Categoria 2</a>
                    </li>
                    <li>
                        <a className='nav_link' href="#">Categoria 3</a>
                    </li>



                </ul>

            </nav>

        </div>
    );
}

export default navBar;
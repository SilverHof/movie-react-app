import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header__container container">
                    <div className="header__inner">
                        <div className="header__logo">

                        </div>
                        <ul className="header__menu">
                            <li className="header__menu-item">

                                <Link to="/" className="header__menu-link">
                                    Home
                                </Link>

                                <Link to="/about" className="header__menu-link">
                                    About
                                </Link>

                                <Link to="/contacts" className="header__menu-link">
                                    Contacts
                                </Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
};


export default Header;
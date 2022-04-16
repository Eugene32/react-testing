import React from 'react';

const NavBar = () => {

    return (
        <nav className="navbar is-fixed-top is-full-mobile is-info">

            <div className="navbar-brand is-full-mobile">

                <a className="navbar-item " href="#about-me">
                    About

                </a>

                <a className="navbar-item" href="#works">
                    Works
                </a>

                <a className="navbar-item" href="#contacts">
                    Contact Me
                </a>

            </div>

        </nav>

    );
};

export default NavBar;

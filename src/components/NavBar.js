import React from 'react';

const NavBar = () => {

    return (
        <nav className="navbar is-fixed-top is-full-mobile is-info">
            <div className="navbar-brand is-full-mobile">
                <span className='title is-1 has-text-white is-relative pl-3'>Reynan</span>
            </div>
                <div className="navbar-end pr-3"> 

                    <a className="navbar-item " href="#about-me">
                        About Me

                    </a>

                    <a className="navbar-item" href="#works">
                        Portfolio
                    </a>

                    <a className="navbar-item" href="#contacts">
                        Contact
                    </a>

                    <a className="navbar-item" href="#contacts">
                        Resume
                    </a>
                </div>

           

        </nav>

    );
};

export default NavBar;

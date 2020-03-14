import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../../logo.svg';
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary mb-2">
            <a className="navbar-brand" href="/">
                <img src={logo} width="300" height="40" alt="" />
            </a>
            <h1 className="mx-auto" >Friends Yearly Income</h1>
            </nav>
        </div>
    );
};

export default Header;
import React from 'react'

import {Link} from 'react-router-dom';

import logo from './logo.jpg';

export default function navbar() {
    return (
        <div>
          <nav>
            <div class="nav-wrapper white">
                <Link to="/" class="left brand-logo grey-text">
                    <img src={logo} alt="Logo" width="200" />
                </Link>
                <ul id="nav-mobile" class="right">
                    <li><Link to="/logIn" class="black-text">Login</Link></li>
                    <li><Link to="/signUp" class="black-text">Signup</Link></li>
                    <li><Link to="/properties" class="black-text">Properties</Link></li>
                </ul>
            </div>
        </nav>
        </div>
    )
}

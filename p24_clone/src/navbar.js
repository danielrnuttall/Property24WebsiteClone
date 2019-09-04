import React from 'react'

import {Link} from 'react-router-dom';



export default function navbar() {
    return (
        <div>
          <nav>
            <div class="nav-wrapper">
                <Link to="/" class="brand-logo">Logo</Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to="/logIn">Login</Link></li>
                    <li><Link to="/signUp">Signup</Link></li>
                    <li><Link to="/properties">Properties</Link></li>
                </ul>
            </div>
        </nav>
        </div>
    )
}

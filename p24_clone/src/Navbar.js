import React from 'react';

import {Link} from 'react-router-dom';

//import '../node_modules/materialize-css/dist/css/materialize.min.css'
//import '../node_modules/materialize-css/dist/js/materialize.min.js'


import logo from './logo.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';

import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Style from './navbar.css';

import SignUp from "./SignUp";
import SignIn from "./logIn";

import { SocialIcon } from 'react-social-icons';

const modalStyle = {
    height: '300px',
};

export default function Navbar() {

    const [show, setShow] = React.useState(false);
    const [sui, setSui] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    return (
        <>
          <nav>
            <div class="nav-wrapper white">
                <Link to="/" class="left brand-logo grey-text">
                    <img src={logo} alt="Logo" width="200" />
                </Link>
                <ul id="nav-mobile" class="right">
                    <li><Link class="blue-text" onClick={handleShow}>Login</Link></li>
                    <li><Link class="blue-text" onClick={handleShow}>Signup</Link></li>
                    <li><Link to="/properties" class="black-text">Properties</Link></li>
                </ul>
            </div>
        </nav>        
        
        <Modal show={show} onHide={handleClose} style={{Style}}>
            <Modal.Header className="justify-content-center">
                <Nav variant="tabs">
                    <Nav.Item active>
                        <Nav.Link style={{color: 'black'}} onClick={() => setSui(true)}><strong><h5>SignUp</h5></strong></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={{color: 'black'}} onClick={() => setSui(false)}><strong><h5>Login</h5></strong></Nav.Link>
                    </Nav.Item>
                </Nav>
            </Modal.Header>
            <Modal.Body>
                <div>
                    {(!sui) ?  <SignIn/> : <SignUp/>}
                </div>
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
                <div>
                    <SocialIcon network="tumblr" />
                    <SocialIcon network="twitter"/>
                    <SocialIcon network="facebook"/>
                </div>
            </Modal.Footer>
        </Modal>
        </> 
    )
}

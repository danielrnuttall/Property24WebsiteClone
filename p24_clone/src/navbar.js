import React from 'react'

import {Link} from 'react-router-dom';

import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'

import logo from './logo.jpg';

import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';

import SignUp from "./SignUp";
import SignIn from "./logIn";

const modalStyle = {
    height: '300px',
  };

export default function Navbar() {

    const [show, setShow] = React.useState(false);
    
    const [sui, setSui] = React.useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    return (
        <div>
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

            <Modal show={show} onHide={handleClose}>
            <Modal.Header className="justify-content-center">
                <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link class="black-text" onClick={() => setSui(true)}>SignUp</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link class="black-text" onClick={() => setSui(false)}>Login</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Modal.Header>
            <Modal.Body style={{modalStyle}}>
                <div style={{modalStyle}}>
                {(!sui) ?  <SignIn/> : <SignUp/>}
                </div>
            </Modal.Body>
            <Modal.Footer>
            
            </Modal.Footer>
            </Modal>
        </nav>
        </div>  
    )
}

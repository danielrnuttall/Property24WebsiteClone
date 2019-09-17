import React from 'react'

import {Link} from 'react-router-dom';

import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'

import logo from './logo.jpg';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';

import logIn from './logIn';
import signUp from './signUp';

export default function Navbar() {

    const [show, setShow] = React.useState(false);

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

            <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header className="justify-content-center">
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link class="black-text">SignUp</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link class="black-text">Login</Nav.Link>
                </Nav.Item>
            </Nav>
            </Modal.Header>
            <Modal.Body>
                <h1>test</h1>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
            Save Changes
            </Button>
            </Modal.Footer>
            </Modal>
        </nav>
        </div>  
    )
}

import React from 'react'

import {Link} from 'react-router-dom';

import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'

import logo from './logo.jpg';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Navbar() {

    const [show, setShow] = useState(false);

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
                    <li><Link to="/logIn" class="black-text">Login</Link></li>
                    <li><Link to="/signUp" class="black-text">Signup</Link></li>
                    <li><Link to="/properties" class="black-text">Properties</Link></li>

                    <Button variant="primary" onClick={handleShow}>
                        Launch demo modal
                    </Button>
                </ul>
                
            </div>
            <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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

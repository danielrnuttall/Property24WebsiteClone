import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';

import SignUp from "./SignUp";
import SignIn from "./logIn";

import { SocialIcon } from 'react-social-icons';

const modalStyle = {
    height: '300px',
};

export default function Suif() {
    const [show, setShow] = React.useState(false);
    const [sui, setSui] = React.useState(false);

    return (
        <>
        <Modal show={show} onHide={handleClose}>
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
            <Modal.Body style={{modalStyle}}>
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
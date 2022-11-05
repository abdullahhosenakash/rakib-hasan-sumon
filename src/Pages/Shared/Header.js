import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo2.png';
import CustomLink from './CustomLink';
import './Shared.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='header-color' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto d-flex align-items-lg-center  custom-font-style text-uppercase">
                        <div className="d-flex flex-column">
                            <CustomLink to="streetPhotography">Street Photography</CustomLink>
                            <CustomLink to="travelPhotography">Travel Photography</CustomLink>
                        </div>
                        <div className="d-flex flex-column ms-lg-5">
                            <CustomLink to="documentaryPhotography">Documentary Photography</CustomLink>
                            <CustomLink to="fineArtPhotography">Fine Art Photography</CustomLink>
                        </div>
                        <div className="d-flex flex-column ms-lg-5">
                            <CustomLink to="naturePhotography">Nature Photography</CustomLink>
                            <div className="d-flex flex-lg-row flex-column justify-content-lg-between">
                                <CustomLink to="contact">Contact</CustomLink>
                                <CustomLink to="about">About</CustomLink>
                            </div>
                        </div>

                    </Nav>
                    <Nav className='d-flex flex-row'>
                        <Nav.Link className='me-3' href="https://www.facebook.com/rhsumonphoto" target="_blank">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </Nav.Link>
                        <Nav.Link className='me-3' href="https://www.instagram.com/rhsumon90/" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} />
                        </Nav.Link>
                        <Nav.Link className='me-3' href="https://twitter.com/rhsumonphoto" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} />
                        </Nav.Link>
                        <Nav.Link href="https://www.eyeem.com/rhsumon" target="_blank">
                            E
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
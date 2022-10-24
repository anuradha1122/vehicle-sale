import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';

export default function Footer() {
    return (
            <div className='footer'>
                <div className='main-footer py-4 text-primary'>
                    <Container>
                        <Row>
                            <Col xs={12} md={4}>
                                <div className='brand'>
                                    <a href={'/'}><img src="/logo-g.png"></img></a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, nobis magni, qui officiis repellendus, possimus ad consequatur quo est illum voluptas distinctio quibusdam voluptate eveniet harum similique. Enim, facilis aut!</p>
                                </div>
                            </Col>
                            <Col xs={12} md={3}>
                                <h6>Quick Links</h6>
                                <ul className='list-unstyled'>
                                    <li><Icon.ArrowUpRightSquareFill /><a href="#">Parks and Recreation</a></li>
                                    <li><Icon.ArrowUpRightSquareFill /><a href="#">Public Works</a></li>
                                    <li><Icon.ArrowUpRightSquareFill /><a href="#">Police Department</a></li>
                                    <li><Icon.ArrowUpRightSquareFill /><a href="#">Fire Department</a></li>
                                    <li><Icon.ArrowUpRightSquareFill /><a href="#">Mayor and City Council</a></li>
                                </ul>
                            </Col>
                            <Col xs={12} md={3}>
                                <h6>Help & Support</h6>
                                <ul className='list-unstyled'>
                                    <li><Icon.ArrowUpRightSquareFill /><a href="#">Parks and Recreation</a></li>
                                    <li><Icon.ArrowUpRightSquareFill /><a href="#">Public Works</a></li>
                                    <li><Icon.ArrowUpRightSquareFill /><a href="#">Police Department</a></li>
                                    <li><Icon.ArrowUpRightSquareFill /><a href="#">Fire Department</a></li>
                                    <li><Icon.ArrowUpRightSquareFill /><a href="#">Mayor and City Council</a></li>
                                </ul>
                            </Col>
                            <Col xs={12} md={2}>
                                <h6>Follow Us</h6>
                                <ul className='list-unstyled'>
                                    <li><Icon.Facebook /><a href="#" title="Facebook"> Facebook</a></li>
                                    <li><Icon.Linkedin /><a href="#a" title="Linkedin">Linkedin</a></li>
                                    <li><Icon.Twitter /><a href="#s" title="Twitter">Twitter</a></li>
                                    <li><Icon.Youtube /><a href="#d" title="Youtube">Youtube</a></li>
                                </ul>

                                <ul className='list-unstyled'>
                                    <li><Icon.EnvelopeFill /><a href="#" title="Email"> info@example.com</a></li>
                                    <li><Icon.Whatsapp /><a href="#a" title="Contact">+94 123456789</a></li>
                                </ul>
                                
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className='copyright bg-primary text-secondary'>
                    <Container>
                        <div className='text-center py-2'>&copy; Copyright {new Date().getFullYear()} - Company Name.  All rights reserved.</div>
                    </Container>
                </div>
            </div>
    )
}

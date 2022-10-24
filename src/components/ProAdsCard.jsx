import React, { useEffect } from 'react';
import axiosInstance from '../services/Axios';
import { Container, Card, Row, Col } from 'react-bootstrap';
import SearchPanel from './SearchPanel';
import * as Icon from 'react-bootstrap-icons';

export default function ProAdsCard() {
    return (
        <>
            <a href={'view-ads'} className='text-decoration-none'>
                <div className='ads-card-0'>
                    <div className='img-div'><img src="ads-img/1.jpg"></img></div>
                    <div className='ads-container'>
                    <h6>joijj</h6>
                        <p><small>Location: Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></p>
                        <Row>
                            <Col>
                                <ul className='list-unstyled'>
                                    <li><Icon.CheckSquareFill /> Engine: 1,330 CC </li>
                                    <li><Icon.CheckSquareFill /> Engine: 1,330 CC</li>
                                </ul>
                            </Col>
                        </Row>
                        <h6>PRICE: LKR 23456.00</h6>
                    </div>
                </div>
            </a>
        </>
    )
}

import React from 'react';
import { Container, Card, Form, Row, Col } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

export default function AdsCard() {

  return (
    <>
      <a href={'view-ads'} className='text-decoration-none'>
      <div className='ads-card-0'>
        <div className='img-div'><img src="ads-img/4.jpg"></img></div>
        <div className='ads-container'>
        <h6>joijj</h6>
          <p><small>Location: Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></p>
          <Row>
            <Col>
              <ul className='list-unstyled'>
                <li><Icon.CheckSquareFill /> Engine: 1,330 CC </li>
                <li><Icon.CheckSquareFill /> Engine: 1,330 CC</li>
                <li className='d-none d-md-block'><Icon.CheckSquareFill /> Transmission: Automatic</li>
                <li className='d-none d-lg-block'><Icon.CheckSquareFill /> Transmission: Automatic</li>
              </ul>
            </Col>
            <Col className='d-none d-md-block'>
            <ul className='list-unstyled'>
                <li><Icon.CheckSquareFill /> Mileage: 80,850 KM</li>
                <li><Icon.CheckSquareFill /> FuelFuel: Gasoline</li>
                <li className='d-none d-md-block'><Icon.CheckSquareFill /> Color: BLUE</li>
                <li className='d-none d-lg-block'><Icon.CheckSquareFill /> Transmission: Automatic</li>
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

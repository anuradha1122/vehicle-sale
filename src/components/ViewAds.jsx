import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Button, Badge, Row, Col } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

export default function ViewAds() {
    
  return (
    <div className='ads-view-container'>
        <Container className='bg-light py-5'>
        <h3>Search results</h3>
        <Row>
        <Col xs={12} md={4}>
        <img className='w-100' src="ads-img/3.jpg"></img>
        <Row className='my-2'>
            <Col className='pe-0'><Button variant="primary" size="lg" className="m-0 p-0 w-100 border-0 rounded-0"><img className='w-100' src="ads-img/3.jpg"></img></Button></Col>
            <Col className='pe-0'><Button variant="primary" size="lg" className="m-0 p-0 w-100 border-0 rounded-0"><img className='w-100' src="ads-img/3.jpg"></img></Button></Col>
            <Col className='pe-0'><Button variant="primary" size="lg" className="m-0 p-0 w-100 border-0 rounded-0"><img className='w-100' src="ads-img/3.jpg"></img></Button></Col>
            <Col className='pe-0'><Button variant="primary" size="lg" className="m-0 p-0 w-100 border-0 rounded-0"><img className='w-100' src="ads-img/3.jpg"></img></Button></Col>
            <Col className='pe-0'><Button variant="primary" size="lg" className="m-0 p-0 w-100 border-0 rounded-0"><img className='w-100' src="ads-img/3.jpg"></img></Button></Col>
            <Col className=''><Button variant="primary" size="lg" className="m-0 p-0 w-100 border-0 rounded-0"><img className='w-100' src="ads-img/3.jpg"></img></Button></Col>
        </Row>
        </Col>
        <Col xs={12} md={8}>
        <h4>Honda Fit DBA-GE6 (USED)</h4>
        <p><small>Posted by Mr. Sameera on 2022-08-19 9:31 am, Colombo</small></p>
        <h5>Specifications</h5>
        <Row>
            <Col>
              <ul className='list-unstyled'>
                <li><Icon.CheckSquareFill /> Reg Year/Month: 2013 / 9</li>
                <li><Icon.CheckSquareFill /> Engine: 1,330 CC</li>
                <li><Icon.CheckSquareFill /> Transmission: Automatic</li>
                <li><Icon.CheckSquareFill /> Body Type: HATCHBACK</li>
                <li><Icon.CheckSquareFill /> Doors: 5</li>
                <li><Icon.CheckSquareFill /> Manufacture Year: 2013</li>
              </ul>
            </Col>
            <Col>
            <ul className='list-unstyled'>
                <li><Icon.CheckSquareFill /> Mileage: 80,850 KM</li>
                <li><Icon.CheckSquareFill /> FuelFuel: Gasoline</li>
                <li><Icon.CheckSquareFill /> Color: BLUE</li>
                <li><Icon.CheckSquareFill /> Year: 2013 / 9</li>
                <li><Icon.CheckSquareFill /> Engine: 1,330 CC</li>
                <li><Icon.CheckSquareFill /> Transmission: Automatic</li>
              </ul>
            </Col>
          </Row>
          <h5>Standard Features</h5>
          <Row xs={4} md={8} lg={8} className='my-2'>
            <Col><Badge bg="secondary" className='w-100'>A/C</Badge></Col>
            <Col><Badge bg="secondary" className='w-100'>Power Steering</Badge></Col>
            <Col><Badge bg="secondary" className='w-100'>Power Window</Badge></Col>
            <Col><Badge bg="secondary" className='w-100'>ABS</Badge></Col>
            <Col><Badge bg="secondary" className='w-100'>Air Bags</Badge></Col>
            <Col><Badge bg="secondary" className='w-100'>Sun Roof</Badge></Col>
            <Col><Badge bg="secondary" className='w-100'>4WD</Badge></Col>
            <Col><Badge bg="secondary" className='w-100'>Power Mirror</Badge></Col>
          </Row>
          <h4>Other comments</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio officia qui error hic quae quibusdam quo consequuntur dicta placeat. Nemo assumenda natus culpa facilis distinctio optio dolorem quibusdam eos saepe.</p>
          <h6>Conatct Number: +94 123456789</h6>
          <h4>Price: (LKR) 23456.00</h4>
        </Col>
        
      </Row>
        </Container>
    </div>
  )
}

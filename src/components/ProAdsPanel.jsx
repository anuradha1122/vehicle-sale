import React, { useEffect } from 'react';
import axiosInstance from '../services/Axios';
import { Container, Card, Row, Col } from 'react-bootstrap';
import SearchPanel from './SearchPanel';
import * as Icon from 'react-bootstrap-icons';
import ProAdsCard from './ProAdsCard';

export default function ProAdsPanel() {
    return (
        <>
            <Row lg={2} md={1} sm={1} xs={1}>
                <Col className='my-2'>
                    <ProAdsCard />
                </Col>
                <Col className='my-2'>
                    <ProAdsCard />
                </Col>
                <Col className='my-2'>
                    <ProAdsCard />
                </Col>
                <Col className='my-2'>
                    <ProAdsCard />
                </Col>
                <Col className='my-2'>
                    <ProAdsCard />
                </Col>
            </Row>
        </>
    )
}

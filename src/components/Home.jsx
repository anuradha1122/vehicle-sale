import React, { useEffect } from 'react';
import axiosInstance from '../services/Axios';
import { Container, Card, Row, Col } from 'react-bootstrap';
import SearchPanel from './SearchPanel';
import * as Icon from 'react-bootstrap-icons';
import ProAdsPanel from './ProAdsPanel';

export default function Home() {

    const getAllCatogaryList = async () => {
        const response = await axiosInstance.get("v_common_details/get_v_condition.php");
        console.log(response.data);
    }

    useEffect(() => {
        async function asyncCall() {
            getAllCatogaryList();
        }
        asyncCall();
    }, []);

    return (
        <div>
            <Container fluid className='bg-primary p-2'>
                <Container className='my-4'>
                    <div className='home-title'>
                        <h4>Make your vehicle dream come true.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas amet rem mollitia, fugit dignissimos voluptatibus quo culpa ab veniam magni eius suscipit natus quis necessitatibus tempore recusandae deleniti facere molestiae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora officia aliquid aperiam eum rerum aut nesciunt cum voluptatem cupiditate obcaecati, dignissimos minima eveniet a eos ea voluptatibus, error recusandae!</p>
                    </div>
                    <SearchPanel />
                </Container>
            </Container>
            <Container className=' p-2'>
                <div className='py-4'>
                    <Row lg={5} md={4} sm={3} xs={2}>
                        <Col className='my-3'>
                            <div className='vehicle-top-brands-card'>
                                <div className=''>
                                    <img className='v-logo' src="v-brands/1.png"></img>
                                </div>
                                <div className='content'>
                                    <span><a href={'/'} className='text-decoration-none'>Toyota</a></span>
                                    <p>340 Ads</p>
                                </div>
                            </div>
                        </Col>
                        <Col className='my-3'>
                            <div className='vehicle-top-brands-card'>
                                <div className=''>
                                    <img className='v-logo' src="v-brands/2.png"></img>
                                </div>
                                <div className='content'>
                                    <span><a href={'/'} className='text-decoration-none'>Toyota</a></span>
                                    <p>230 Ads</p>
                                </div>
                            </div>
                        </Col>
                        <Col className='my-3'>
                            <div className='vehicle-top-brands-card'>
                                <div className=''>
                                    <img className='v-logo' src="v-brands/3.png"></img>
                                </div>
                                <div className='content'>
                                    <span><a href={'/'} className='text-decoration-none'>Toyota</a></span>
                                    <p>2310 Ads</p>
                                </div>
                            </div>
                        </Col>
                        <Col className='my-3'>
                            <div className='vehicle-top-brands-card'>
                                <div className=''>
                                    <img className='v-logo' src="v-brands/4.png"></img>
                                </div>
                                <div className='content'>
                                    <span><a href={'/'} className='text-decoration-none'>Toyota</a></span>
                                    <p>2300 Ads</p>
                                </div>
                            </div>
                        </Col>
                        <Col className='my-3'>
                            <div className='vehicle-top-brands-card'>
                                <div className=''>
                                    <img className='v-logo' src="v-brands/5.png"></img>
                                </div>
                                <div className='content'>
                                    <span><a href={'/'} className='text-decoration-none'>Toyota</a></span>
                                    <p>2390 Ads</p>
                                </div>
                            </div>
                        </Col>
                        <Col className='my-3'>
                            <div className='vehicle-top-brands-card'>
                                <div className=''>
                                    <img className='v-logo' src="v-brands/6.png"></img>
                                </div>
                                <div className='content'>
                                    <span><a href={'/'} className='text-decoration-none'>Toyota</a></span>
                                    <p>9340 Ads</p>
                                </div>
                            </div>
                        </Col>
                        <Col className='my-3'>
                            <div className='vehicle-top-brands-card'>
                                <div className=''>
                                    <img className='v-logo' src="v-brands/7.png"></img>
                                </div>
                                <div className='content'>
                                    <span><a href={'/'} className='text-decoration-none'>Toyota</a></span>
                                    <p>2640 Ads</p>
                                </div>
                            </div>
                        </Col>
                        <Col className='my-3'>
                            <div className='vehicle-top-brands-card'>
                                <div className=''>
                                    <img className='v-logo' src="v-brands/8.png"></img>
                                </div>
                                <div className='content'>
                                    <span><a href={'/'} className='text-decoration-none'>Toyota</a></span>
                                    <p>1340 Ads</p>
                                </div>
                            </div>
                        </Col>
                        <Col className='my-3'>
                            <div className='vehicle-top-brands-card'>
                                <div className=''>
                                    <img className='v-logo' src="v-brands/9.png"></img>
                                </div>
                                <div className='content'>
                                    <span><a href={'/'} className='text-decoration-none'>Toyota</a></span>
                                    <p>2360 Ads</p>
                                </div>
                            </div>
                        </Col>
                        <Col className='my-3'>
                            <div className='vehicle-top-brands-card'>
                                <div className=''>
                                    <img className='v-logo' src="v-brands/10.png"></img>
                                </div>
                                <div className='content'>
                                    <span><a href={'/'} className='text-decoration-none'>Toyota</a></span>
                                    <p>2340 Ads</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

            <Container fluid className='bg-light py-5'>
            <Container className='mb-4'>
                <ProAdsPanel />
            </Container>
            </Container>
        </div>
    )
}

import React, { useContext } from 'react';
import { Container, Card, Form, Row, Col } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import AdsCard from './AdsCard';
import SearchPanel from './SearchPanel';
import DataContext from '../services/MyContext';

export default function AdsPanel() {
    const { allVehicleData } = useContext(DataContext);

    return (
        <div>

            <Container className='bg-light py-5'>
                <div className='ads-serch-panel'>
                    <div className='left-manu d-none d-lg-block'>
                        <h6>Vehicle Barands</h6>
                        <ul className='list-unstyled'>
                            <li><a href="#" title="Facebook">Honda</a><small> (12345)</small></li>
                            <li><a href="#a" title="Linkedin">Mahindra</a><small> (12345)</small></li>
                            <li><a href="#s" title="Twitter">Toyota</a><small> (12345)</small></li>
                            <li><a href="#d" title="Youtube">Nishan</a><small> (12345)</small></li>
                            <li><a href="#d" title="Youtube">Mitsubishi</a><small> (12345)</small></li>
                        </ul>
                        <h6>Shop By Type</h6>
                        <ul className='list-unstyled'>
                            <li><a href="#" title="Facebook">Honda</a><small> (12345)</small></li>
                            <li><a href="#a" title="Linkedin">Mahindra</a><small> (12345)</small></li>
                            <li><a href="#s" title="Twitter">Toyota</a><small> (12345)</small></li>
                            <li><a href="#d" title="Youtube">Nishan</a><small> (12345)</small></li>
                            <li><a href="#d" title="Youtube">Mitsubishi</a><small> (12345)</small></li>
                        </ul>
                    </div>

                    <div className='right-panel'>
                        <div className='my-4'>
                        <h4>Search Your Vehicles</h4>
                        <SearchPanel />
                        </div>
                        <h6>Lorem ipsum dolor sit amet</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae impedit quisquam ab cum dolor deleniti debitis ea! Nemo id ex placeat nihil sunt quasi ut incidunt voluptatibus magni est?</p>

                            <div className='my-2'>
                            <AdsCard />
                            </div>   

                    </div>
                </div>
            </Container>
        </div>
    )
}

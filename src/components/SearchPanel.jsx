import React, { useContext } from 'react';
import DataContext from '../services/MyContext';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Row, Col, Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import * as Icon from 'react-bootstrap-icons';

export default function SearchPanel() {
    const { vehicleBrandsList, vehicleColourList, yearsList, vehicleTypeList, vehicleModel } = useContext(DataContext);
    const navigate = useNavigate();

    const years = yearsList.map((d, index) => {
        return {
            label: d,
            value: d,
            key: index
        }
    }
    );

    const vBrands = vehicleBrandsList.map((b, index) => {
        return {
            label: b.BRAND,
            value: b.BRAND_ID,
            key: index
        }
    }
    );

    const vModel = vehicleModel.map((m, index) => {
        return {
            label: m.MODEL,
            value: m.MODEL_ID,
            key: index
        }
    }
    );

    const colour = vehicleColourList.map((c, index) => {
        return {
            label: c.COLOUR,
            value: c.COLOR_ID,
            key: index
        }
    }
    );

    const vType = vehicleTypeList.map((t, index) => {
        return {
            label: t.V_TYPE,
            value: t.VTYPE_ID,
            key: index
        }
    }
    );

    const Btype = [
        { value: '0', label: 'Any Body Type' },
        { value: '1', label: 'Type-01' },
        { value: '2', label: 'Type-02' },
        { value: '3', label: 'Type-03' },
        { value: '4', label: 'Type-04' },
      ];

    const vehicleType = [
        { value: '0', label: 'Any Type' },
        { value: '1', label: 'Van' },
        { value: '2', label: 'Bus' },
        { value: '3', label: 'SVU/Jeep' },
        { value: '4', label: 'Double cab/ Pickup' },
        { value: '5', label: 'Crew cab' },
        { value: '6', label: 'Ambulance' },
        { value: '7', label: 'Skateboard' },
        { value: '8', label: 'Baby carriage' },
        { value: '9', label: 'Bicycle' },
        { value: '10', label: 'Three wheel' },
        { value: '11', label: 'Motorcycle' },
        { value: '12', label: 'Lorry/ Tipper' },
        { value: '13', label: 'Crane' },
        { value: '14', label: 'Forklift' },
        { value: '15', label: 'Tractor' },
        { value: '16', label: 'Recycling truck' },
        { value: '17', label: 'Cement mixer' },
        { value: '18', label: 'Dump truck' },
        { value: '19', label: 'Subway ' },
        { value: '20', label: 'Aerial tramway' },
        { value: '21', label: 'Scooter' },
        { value: '22', label: 'Other' }
      ];

      const priceRage = [
        { value: '0', label: 'Any Price' },
        { value: '1', label: 'Below 1 Million' },
        { value: '2', label: '1 Million - 2 Million' },
        { value: '3', label: '2 Million - 3 Million' },
        { value: '4', label: '3 Million - 4 Million' },
        { value: '5', label: '4 Million - 5 Million' },
        { value: '6', label: '5 Million - 6 Million' },
        { value: '7', label: '6 Million - 7 Million' },
        { value: '8', label: '7 Million - 8 Million' },
        { value: '9', label: '8 Million - 9 Million' },
        { value: '10', label: '9 Million - 10 Million' },
        { value: '11', label: 'above 10 Million' },
      ];

    const customStyles = {
        control: (base, state) => ({
            ...base,
            background: "#ffffff",
            height: 35,
            minHeight: 35,
            fontSize: state.selectProps.myFontSize ? "size" : "14px"
        }),
        option: (provided, state) => ({
            ...provided,
            fontSize: state.selectProps.myFontSize ? "size" : "14px"
        }),
    };

    const search = () => {
        navigate('/ads');
    };

    return (
        <div>
            
            <Form>
                <Row lg={4} md={2} sm={2} xs={2} className='g-2'>
                <Col className='my-2'><Select options={vType} styles={customStyles} placeholder="Select a type..." /></Col>
                    <Col className='my-2'><Select options={vBrands} styles={customStyles} placeholder="Select a make..." /></Col>
                    <Col className='my-2'><Select options={vModel} styles={customStyles} placeholder="Select a model..." /></Col>
                    <Col className='my-2'><Select options={colour} styles={customStyles} placeholder="Colour..." /></Col>
                    <Col className='my-2'><Select options={years} styles={customStyles} placeholder="Register year..." /></Col>
                    <Col className='my-2'><Select options={priceRage} styles={customStyles} placeholder="Price range..." /></Col>
                    <Col className='my-2'><Select options={Btype} styles={customStyles} placeholder="Body type (any)" /></Col>
                    <Col className='my-2'><Button onClick={search} variant="dark w-100"><Icon.Search />&nbsp;&nbsp;Search</Button></Col>
                </Row>
            </Form>

        </div>
    )
}

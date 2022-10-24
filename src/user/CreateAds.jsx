import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import DataContext from '../services/MyContext';
import * as Icon from 'react-bootstrap-icons';
import DataService from '../services/Data-services';

export default function CreateAds(props) {

  const { user } = props;

  const { vehicleBrandsList, vehicleColourList, yearsList,
    vehicleTypeList, vehicleModel, vehicleSTDFeatures,
    cityList, districList, proviceList } = useContext(DataContext);

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileLimit, setFileLimit] = useState(false);
  const MAX_COUNT = 6;

  const [message, setMessage] = useState("");

  const handleUploadFile = (files) => {
    //console.log(files);
    const uploaded = [...uploadedFiles];
    //const exist = uploaded.find((f) => f.name === files.name);
    files.some((file) => {
      if (uploaded.length === MAX_COUNT) {
        setFileLimit(true);
        alert('You can only add a maximum of ' + MAX_COUNT + ' files')
      } else {
        uploaded.push(file);
        setUploadedFiles(uploaded);
      }

    })

    //console.log(uploadedFiles)
  }

  const handleFileEvent = (e) => {
    const fileSize = (((e.target.files[0].size) / 1024) / 1024).toFixed(4);
    if (fileSize < 4) {
      const chosenFile = Array.prototype.slice.call(e.target.files);
      handleUploadFile(chosenFile);
    } else alert("File too big!");

    //console.log(chosenFile)
  }

  const handleRemoveItem = (name) => {
    let hardCopy = [...uploadedFiles];
    //hardCopy = hardCopy.filter(file => file.name !== name);
    alert(name);
    for (var i = 0; i < hardCopy.length; ++i) {
      if (hardCopy[i].name === name) {
        //console.log("match at: " + i);
        // remove the one element at the index where we get a match
        hardCopy.splice(i, 1);
        setUploadedFiles(hardCopy);
      }

    }

  }

  useEffect(() => {
    //console.log(cityList)
  }, []);

  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.contactNo);
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleCondition, setVehicleCondition] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModelNo, setVehicleModelNo] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehicleBodyType, setVehicleBodyType] = useState('');
  const [vehicleMfYear, setVehicleMfYear] = useState('');
  const [vehicleRegYear, setVehicleRegYear] = useState('');
  const [engineCapacity, setEngineCapacity] = useState('');
  const [transmission, setTransmission] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [mileage, setMileage] = useState('');
  const [checkedSTDF, setCheckedSTDF] = useState([]);
  const [otherD, setOtherD] = useState('');
  const [province, setProvice] = useState('');
  const [distric, setDistric] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');
  const [leasing, setLeasing] = useState(false);

  const [imgURLS, setImgURLS] = useState([]);

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checkedSTDF];
    if (event.target.checked === true) {
      updatedList = [...updatedList, event.target.value];
    } else {
      updatedList.splice(checkedSTDF.indexOf(event.target.value), 1);
    }
    setCheckedSTDF(updatedList);
    //console.log(checkedSTDF);
  };

  const [validated, setValidated] = useState(false);
  const data = {
    "personalData": {
      "name": name,
      "phone": phone,
      "id": user.id,
      "province": province,
      "distric": distric,
      "city": city,
    },
    "vehicleData": {
      "vehicleType": vehicleType,
      "vehicleMake": vehicleMake,
      "vehicleModelNo": vehicleModelNo,
      "vehicleCondition": vehicleCondition,
      "vehicleColor": vehicleColor,
      "vehicleBodyType":vehicleBodyType,
      "vehicleMfYear": vehicleMfYear,
      "vehicleRegYear": vehicleRegYear,
      "engineCapacity": engineCapacity,
      "transmission": transmission,
      "fuelType": fuelType,
      "mileage": mileage,
      "otherD": otherD,
    },
    "standardFeatures": checkedSTDF,
    "imgURLS": imgURLS,
    "pricing":{
      "price":price,
      "leasing":leasing,
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {

      if (uploadedFiles.length > 0) {
        DataService.uploadAdsImg(uploadedFiles).then(res => { // then print response status
          //console.log(res);
          var updateImgURLS = [];
          for (var i = 0; i < res.length; ++i) {
            if (res[i].error === false) {
              updateImgURLS = [...updateImgURLS, res[i].url];
            } else return;
          }
          setImgURLS(updateImgURLS);
          console.log(updateImgURLS);
          console.log(JSON.stringify(data));
          alert(JSON.stringify(data));

        }, (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
        }
        );
      } else alert("Please select a image file!");

    }

    setValidated(true);
  };

  return (
    <>
      <Container className='bg-light py-5'>
        <h4 className='text-center my-3'>Add Your Vehicle</h4>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <h5 className='my-4'>Contact Info</h5>
              <Form.Group as={Row} className="mb-3" controlId="name">
                <Form.Label column sm="3">
                  Your Name*:
                </Form.Label>
                <Col sm="9">
                  <Form.Control onChange={(e) => setName(e.currentTarget.value)} value={name} required type="text" placeholder="PP. Kumara" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="phoneNo">
                <Form.Label column sm="3">
                  Phone number*:
                </Form.Label>
                <Col sm="9">
                  <Form.Control onChange={(e) => setPhone(e.currentTarget.value)} value={phone} required type="text" placeholder="07112345678" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="province">
                <Form.Label column sm="3">
                  Province*:
                </Form.Label>
                <Col sm="9">
                  <Form.Select onChange={(e) => setProvice(e.currentTarget.value)} value={province} required aria-label="Default select example">
                    <option value={''} >Open this select menu</option>
                    {proviceList.map((p, index) => (
                      <option key={index} value={p.PROVINCE_ID}>{p.NAME_EN}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="distric">
                <Form.Label column sm="3">
                  Distric*:
                </Form.Label>
                <Col sm="9">
                  <Form.Select onChange={(e) => setDistric(e.currentTarget.value)} value={distric} required aria-label="Default select example">
                    <option value={''} >Open this select menu</option>
                    {districList.filter(distric => {
                      return distric.PROVINCE_ID === province;
                    }).map((filterDistric, index) => (
                      <option key={index} value={filterDistric.DISTRICT_ID}>{filterDistric.NAME_EN}</option>
                    ))}

                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="city">
                <Form.Label column sm="3">
                  City*:
                </Form.Label>
                <Col sm="9">
                  <Form.Select onChange={(e) => setCity(e.currentTarget.value)} value={city} required aria-label="Default select example">
                    <option value={''} >Open this select menu</option>
                    {cityList.filter(city => {
                      return city.DISTRICT_ID === distric;
                    }).map((filterCity, index) => (
                      <option key={index} value={filterCity.CITY_ID}>{filterCity.NAME_EN}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Form.Group>
              <h5 className='my-4'>Vehicle Info</h5>
              <Form.Group as={Row} className="mb-3" controlId="vehicleType">
                <Form.Label column sm="3">
                  Vehicle Type*:
                </Form.Label>
                <Col sm="9">
                  <Form.Select onChange={(e) => setVehicleType(e.currentTarget.value)} value={vehicleType} required aria-label="Default select example">
                    <option value={''} >Select type</option>
                    {vehicleTypeList.map((t, index) => (
                      <option key={index} value={t.VTYPE_ID}>{t.V_TYPE}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="vehicleCondition">
                <Form.Label column sm="3">
                  Vehicle Condition*:
                </Form.Label>
                <Col sm="9">
                  <Form.Select onChange={(e) => setVehicleCondition(e.currentTarget.value)} value={vehicleCondition} required aria-label="Default select example">
                    <option value={''} >Select condition</option>
                    <option value="1">Brand new</option>
                    <option value="2">Registered-used</option>
                    <option value="3">Unregistered-recondition</option>
                    <option value="4">Antique</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="vehicleMake">
                <Form.Label column sm="3">
                  Vehicle Make*:
                </Form.Label>
                <Col sm="9">
                  <Form.Select onChange={(e) => setVehicleMake(e.currentTarget.value)} value={vehicleMake} required aria-label="Default select example">
                    <option value={''} >Select make</option>
                    {vehicleBrandsList.map((m, index) => (
                      <option key={index} value={m.BRAND_ID}>{m.BRAND}</option>
                    ))}

                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="vehicleModel">
                <Form.Label column sm="3">
                  Model*:
                </Form.Label>
                <Col sm="9">
                  <Form.Select onChange={(e) => setVehicleModelNo(e.currentTarget.value)} value={vehicleModelNo} required aria-label="Default select example">
                    <option value={''} >Select model</option>
                    {vehicleModel.map((m, index) => (
                      <option key={index} value={m.MODEL_ID}>{m.MODEL}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="vehicleColor">
                <Form.Label column sm="3">
                  Colour*:
                </Form.Label>
                <Col sm="9">
                  <Form.Select onChange={(e) => setVehicleColor(e.currentTarget.value)} value={vehicleColor} required aria-label="Default select example">
                    <option value={''} >Select colour</option>
                    {vehicleColourList.map((c, index) => (
                      <option key={index} value={c.COLOR_ID}>{c.COLOUR}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="vehicleColor">
                <Form.Label column sm="3">
                  Body type*:
                </Form.Label>
                <Col sm="9">
                  <Form.Select onChange={(e) => setVehicleBodyType(e.currentTarget.value)} value={vehicleBodyType} required aria-label="Default select example">
                    <option value={''} >Select body type</option>
                    <option value={'1'} >Type-01</option>
                    <option value={'2'} >Type-02</option>
                    <option value={'3'} >Type-03</option>
                    <option value={'4'} >Type-04</option>
                    <option value={'5'} >Type-05</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="mafYear">
                <Form.Label column sm="3">
                  Manufactured Year*:
                </Form.Label>
                <Col sm="9">
                  <Form.Select onChange={(e) => setVehicleMfYear(e.currentTarget.value)} value={vehicleMfYear} required aria-label="Select Year">
                    <option value={''} >Select year</option>
                    {yearsList.map((y, index) => (
                      <option key={index} value={y}>{y}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="regYear">
                <Form.Label column sm="3">
                  Registed Year*:
                </Form.Label>
                <Col sm="9">
                  <Form.Select onChange={(e) => setVehicleRegYear(e.currentTarget.value)} value={vehicleRegYear} required aria-label="Select Year">
                    <option value={''} >Select year</option>
                    {yearsList.map((y, index) => (
                      <option key={index} value={y}>{y}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="engineCapasity">
                <Form.Label column sm="3">
                  Engine Capacity (CC)*:
                </Form.Label>
                <Col sm="9">
                  <Form.Control onChange={(e) => setEngineCapacity(e.currentTarget.value)} value={engineCapacity} required type="number" placeholder="1200" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="transmission">
                <Form.Label column sm="3">
                  Transmission*:
                </Form.Label>
                <Col sm="9">
                  <Form.Select onChange={(e) => setTransmission(e.currentTarget.value)} value={transmission} required aria-label="Delect Transmission">
                    <option value={''} >Select transmission</option>
                    <option value="1">Automatic</option>
                    <option value="2">Manual </option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="fuelType">
                <Form.Label column sm="3">
                  Fuel Type*:
                </Form.Label>
                <Col sm="9">
                  <Form.Select onChange={(e) => setFuelType(e.currentTarget.value)} value={fuelType} required aria-label="Select Fuel Type">
                    <option value={''} >Select fuel type</option>
                    <option value="1">Diesel</option>
                    <option value="2">Petrol</option>
                    <option value="3">Electric</option>
                    <option value="4">Hybrid</option>
                    <option value="5">Gas</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="mileage">
                <Form.Label column sm="3">
                  Mileage (km)*:
                </Form.Label>
                <Col sm="9">
                  <Form.Control onChange={(e) => setMileage(e.currentTarget.value)} value={mileage} required type="number" placeholder="150000" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="stdFatures">
                <Form.Label column sm="3">
                  Standard features*:
                </Form.Label>
                <Col sm="9">
                  <Row xs={2}>
                    {vehicleSTDFeatures.map((std, index) => (
                      <Col key={index}>
                        <Form.Check
                          value={std.SF_ID}
                          onChange={handleCheck}
                          type="checkbox"
                          id="custom-switch"
                          label={std.FEATURE}
                        />
                      </Col>
                    ))}

                  </Row>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="aditionalInfo">
                <Form.Label column sm="3">
                  Additional Info:
                </Form.Label>
                <Col sm="9">
                  <Form.Control onChange={(e) => setOtherD(e.currentTarget.value)} value={otherD} as="textarea" rows={4} />
                </Col>
              </Form.Group>
              <h5 className='my-4'>Pricing</h5>
              <Form.Group as={Row} className="mb-3" controlId="price">
                <Form.Label column sm="3">
                  Price (LKR)*:
                </Form.Label>
                <Col sm="4">
                  <Form.Control onChange={(e) => setPrice(e.currentTarget.value)} value={price} required type="number" placeholder="150000" />
                </Col>
                <Col sm="5">
                  <Form.Check
                    value={leasing}
                    onChange={(e) => setLeasing(e.target.checked)}
                    type="checkbox"
                    id="custom-switch"
                    label="Ongoing vehicle leasing"
                  />
                </Col>
              </Form.Group>
              <h5 className='my-4'>Vehicle Images</h5>
              <Form.Group as={Row} className="mb-3" controlId="img">
                <Form.Label column sm="3"></Form.Label>
                <Col sm="9">
                  <div className='crop-img-div'>
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className='images'>
                        <Button className='notify-badge border-0' onClick={() => handleRemoveItem(file.name)} >x</Button>
                        <img src={URL.createObjectURL(file)}></img>
                      </div>
                    ))}
                  </div>

                  <div className='custom-file-input' htmlFor="file-upload">
                    <label htmlFor="file-upload">
                      <Icon.Upload /> Upload Vehicle Images ({uploadedFiles.length} of 6)
                    </label>
                    <input id="file-upload" type="file" onChange={handleFileEvent} accept="image/*" />
                  </div>

                </Col>
              </Form.Group>
              <Button type='submit' variant="outline-primary" className='float-end'>save</Button>
            </Form>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </>
  )
}

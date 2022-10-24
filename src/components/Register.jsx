import React, { useState } from 'react';
import AuthService from '../services/Auth-service';
import { Card, Form, Button, Alert, Container, Spinner } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState('');
    const [nameWithInitias, setName] = useState('');
    const [contactNo, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [gender, setGender] = useState('');

    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        setSuccessful(false);
        if (email) {
            AuthService.Register(email, nameWithInitias, birthDay, gender, contactNo, password).then((res) => {
                if (res.error) {
                    setMessage(res.status);
                    setSuccessful(false);
                    //console.log(res);
                    setLoading(false);
                    //window.location.reload();
                } else {
                    setMessage(res.status);
                    setSuccessful(true);
                    //console.log(res.error);
                    setLoading(false);
                }

            },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setMessage(resMessage);
                    setSuccessful(false);
                    setLoading(false);
                }
            );
        } else {
            setLoading(false);
        }

    }

    return (
        <Container fluid className='my-5'>
            <div className='reg-form'>
                <h4 className='text-center p-2'>Register</h4>
                <Card className='bg-light'>
                    <Card.Body>
                        {message && (
                            <Alert className='p-2' variant={successful ? 'success' : 'danger'}>
                                <span style={{ fontSize: 12 }}>{message}</span>
                            </Alert>
                        )}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Control onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" required isInvalid={false} />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="name">
                                <Form.Control onChange={(e) => setName(e.target.value)} value={nameWithInitias} type="text" placeholder="Name with initials" required isInvalid={false} />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="birthday">
                                <Form.Control onChange={(e) => setBirthDay(e.target.value)} value={birthDay} type="text" placeholder="Birthday (1988-08-23)" required isInvalid={false} />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <div className="mb-3" onChange={(e) => setGender(e.target.value)}>
                                <Form.Check inline type={'radio'} name={'gender'} value={0} label={'Male'} />
                                <Form.Check inline type={'radio'} name={'gender'} value={1} label={'Female'} />
                                <Form.Check inline type={'radio'} name={'gender'} value={2} label={'Other'} />
                            </div>
                            <Form.Group className="mb-3" controlId="mobile">
                                <Form.Control onChange={(e) => setMobile(e.target.value)} value={contactNo} type="text" placeholder="Mobile number" required isInvalid={false} />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Control onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="New password" required isInvalid={false} />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button disabled={loading} className='w-100' variant="primary" type="submit">
                                {loading ? (<><Spinner animation="border" size="sm" /> Loading ...</>) : ('Sign up')}
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Card className='mt-2'>
                    <Card.Body><span style={{ fontSize: 14 }}>Already have an account? <Link to="/login">Login</Link> now.</span></Card.Body>
                </Card>
            </div>
        </Container>

    )
}


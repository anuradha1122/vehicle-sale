import React, { useState } from 'react';
import AuthService from '../services/Auth-service';
import { useNavigate, Link, Redirect } from "react-router-dom";
import { Container, Card, Form, Button, Spinner, Alert } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

export default function Login() {
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);
        if (userID) {
            AuthService.Login(userID, password).then((res) => {
                if (res.error) {
                    setIsLogin(false);
                    setMessage(res.status);
                    //console.log(res.error);
                    setLoading(false);

                } else {
                    navigate("/dash", {replace: true});
                    //console.log(res);
                    setLoading(false);
                    //window.location.reload();
                }

            },
                (error) => {
                    setIsLogin(false);
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setLoading(false);
                    setMessage(resMessage);
                }
            );
        } else {
            setLoading(false);
        }
    };

    return (
        <Container className='mt-5'>
            <div className='login-form'>
                <h4 className='text-center p-2'>Login</h4>
                <Card className='bg-light'>
                    <Card.Body>
                        <Alert variant='danger' className='p-2' show={!isLogin}>
                            <span style={{ fontSize: 12 }}>{message}</span>
                        </Alert>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control onChange={(e) => setUserID(e.target.value)} value={userID} type="email" placeholder="Enter email" required isInvalid={false} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" required isInvalid={false} />
                            </Form.Group>
                            <Button disabled={loading} className='w-100 my-1' variant="primary" type="submit">
                                {loading ? (<><Spinner animation="border" size="sm" /> Login ...</>) : ('Sign in')}
                            </Button>
                            <Button className='w-100 my-1' variant="outline-secondary"><Icon.Google /> Login with google</Button>
                            <Button className='w-100 my-1' variant="outline-secondary"><Icon.Facebook /> Login with Facebook</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Card className='mt-2'>
                    <Card.Body><span style={{ fontSize: 14 }}>Don't have an account? <Link to={'/register'}> Register</Link> now.</span></Card.Body>
                </Card>
            </div>
        </Container>
    )
}
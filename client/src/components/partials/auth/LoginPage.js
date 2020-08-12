import React, { useRef, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { ValidatorForm } from 'react-form-validator-core';
import { Link } from 'react-router-dom';
import TextValidator from '../common/TextValidator';

const LoginPage = () => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });
    const { email, password } = state;
    
    const handleChange = ({target: { name, value }}) => setState({ ...state, [name]: value });

    const handleSubmit = e => e.preventDefault();

    const formRef = useRef();
    return (
        <section className="section">
            <div className="container">
                <div className="loginRegisterBox">
                    <div className="loginRegisterBox__content">
                        <h1 className="size40 white">Login to <br/> Your Account</h1>
                        <p className="white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam laborum sint animi maiores, repellat, nobis laboriosam non, sapiente cumque nostrum commodi recusandae numquam. Libero, ut perferendis? Quibusdam, architecto ab? Doloribus commodi tempora quia odit tenetur dolorum fugit reiciendis labore vero!
                        </p>
                    </div>
                    <div className="loginRegisterBox__form">
                        <ValidatorForm
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="ui form"
                        >
                            <Form.Field>
                                <label>Username</label>
                                <TextValidator
                                    onChange={handleChange}
                                    name="email"
                                    value={email}
                                    placeholder="i.e. registered email or mobile"
                                    validators={['required', 'isEmail']}
                                    errorMessages={['Email/Mobile is required.', 'Email is not valid']}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Enter Password</label>
                                <TextValidator
                                    icon="eye"
                                    type="password"
                                    onChange={handleChange}
                                    name="password"
                                    value={password}
                                    placeholder="Enter Password"
                                    validators={['required']}
                                    errorMessages={['Password is required.']}
                                />
                            </Form.Field>
                            <div className="forgotPassword">
                                <Link to="/forgot-password">Forgot Password??</Link>
                            </div>
                            
                            <div className="buttonBox">
                                <Button type="submit" fluid primary>Login to My Account</Button>
                            </div>

                            <div className="switchPage">
                                Don’t have an account click here to
                                <Link to="/register">Register</Link>
                            </div>
                        </ValidatorForm>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage

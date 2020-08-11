import React, { useRef, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { ValidatorForm } from 'react-form-validator-core';
import { Link } from 'react-router-dom';
import TextValidator from '../../partials/common/TextValidator';

const ForgotPasswordView = () => {
	const [state, setState] = useState({
        email: ''
    });
    const { email } = state;
    
    const handleChange = ({target: { name, value }}) => setState({ ...state, [name]: value });

    const handleSubmit = e => e.preventDefault();

    const formRef = useRef();
    return (
        <section className="section">
            <div className="container">
                <div className="loginRegisterBox">
                    <div className="loginRegisterBox__content">
                        <h1 className="size40 white">Forgot Password</h1>
                        <p className="white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className="loginRegisterBox__form">
                        <ValidatorForm
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="ui form"
                        >
                            <Form.Field>
                                <label>Registered Email or Mobile</label>
                                <TextValidator
                                    onChange={handleChange}
                                    name="email"
                                    value={email}
                                    placeholder="Registered email or mobile"
                                    validators={['required', 'isEmail']}
                                    errorMessages={['Email/Mobile is required.', 'Email is not valid']}
                                />
                            </Form.Field>

                            <div className="buttonBox">
                                <Button type="submit" fluid primary>Change Password</Button>
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

export default ForgotPasswordView

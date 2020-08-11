import React, { useRef, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from '../../partials/common/TextValidator';

const ValidateOTPView = () => {
	const [state, setState] = useState({
        otp: '',
    });
    const { otp } = state;
    
    const handleChange = ({target: { name, value }}) => setState({ ...state, [name]: value });

    const handleSubmit = e => e.preventDefault();

    const formRef = useRef();
    return (
        <section className="section">
            <div className="container">
                <div className="loginRegisterBox">
                    <div className="loginRegisterBox__content">
                        <h1 className="size40 white">Verify OTP</h1>
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
                            <h4 className="size21 semi">OTP sent to your register mobile number 99****5242</h4>
                            <Form.Field>
                                <label>Enter OTP</label>
                                <TextValidator
                                    onChange={handleChange}
                                    type="number"
                                    name="otp"
                                    value={otp}
                                    placeholder="6 digit OTP"
                                    validators={['required']}
                                    errorMessages={['OTP is required']}
                                />
                            </Form.Field>
                            <p>Valid for 15 mins only.</p>

                            <div className="buttonBox">
                                <Button type="submit" fluid primary>Verify OTP</Button>
                            </div>
                        </ValidatorForm>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ValidateOTPView

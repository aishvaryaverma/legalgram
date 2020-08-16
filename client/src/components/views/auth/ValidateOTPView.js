import React, { useRef, useState } from "react";
// redux
import { connect } from 'react-redux';
import { verifyOTP } from '../../../actions/auth';
// libs
import { Button, Form } from "semantic-ui-react";
// import { ToastContainer, toast } from 'react-toastify';
// components
import { Redirect } from 'react-router-dom';
import Alert from '../../layout/Alert';
import TextValidator from '../../partials/common/TextValidator';
import { ValidatorForm } from 'react-form-validator-core';

const ValidateOTPView = ({ history, verifyOTP, token, tokenLoading }) => {
    const formRef = useRef();

	const [state, setState] = useState({
        otp: '',
    });
    const { otp } = state;
    
    const handleChange = ({target: { name, value }}) => setState({ ...state, [name]: value });

    const handleSubmit = e => {
        e.preventDefault();

        if(!tokenLoading) verifyOTP(token, otp, history);
    }

    if(tokenLoading) return <Redirect to="/" />;
    const mobile = sessionStorage.getItem('mobile');
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
                        <Alert />
                        <ValidatorForm
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="ui form"
                        >
                            <h4 className="size21 semi">OTP sent to your register mobile number {mobile}</h4>
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
                            <p className="small">Valid for 15 mins only.</p>

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

const mapStateToProps = state => ({
    token: state.auth.token,
    tokenLoading: state.auth.tokenLoading
});

export default connect(mapStateToProps, { verifyOTP })(ValidateOTPView)

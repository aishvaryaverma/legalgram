import React, { useRef } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from '../common/TextValidator';

const LoginPage = () => {
    const form = useRef();
    return (
        <section className="section">
            <div className="container">
                <div className="loginRegisterBox">
                    <div className="loginRegisterBox__content">
                        <h1 className="size50 white">Login to Your Account</h1>
                        <p className="white">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ex libero
                            sint, earum dolorum veniam voluptas magnam explicabo deserunt veritatis!
                        </p>
                    </div>
                    <div className="loginRegisterBox__form">
                        
                        <ValidatorForm
                            ref={form}
                            // onSubmit={this.handleSubmit}
                        >
                            <Form.Field>
                                <label>First Name</label>
                                <TextValidator placeholder="First Name" 
                                validators={['required', 'isEmail']} />
                            </Form.Field>
                            <Form.Field>
                                <label>Last Name</label>
                                <TextValidator placeholder="Last Name" />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox label="I agree to the Terms and Conditions" />
                            </Form.Field>
                            <Button type="submit">Submit</Button>
                        </ValidatorForm>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage

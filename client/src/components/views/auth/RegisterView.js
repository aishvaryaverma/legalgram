import React, { useRef, useState } from "react";
import { Button, Form, Grid } from "semantic-ui-react";
import { ValidatorForm } from 'react-form-validator-core';
import { Link } from 'react-router-dom';
import TextValidator from '../../partials/common/TextValidator';

const RegisterView = () => {
	const [state, setState] = useState({
		fname: '',
		lname: '',
		email: '',
		mobile: '',
		password: '',
		cpassword: ''
    });
    const { fname, lname, email, mobile, password, cpassword } = state;
    
    const handleChange = ({target: { name, value }}) => setState({ ...state, [name]: value });

    const handleSubmit = e => e.preventDefault();

    const formRef = useRef();
    return (
        <section className="section">
            <div className="container">
                <div className="loginRegisterBox loginRegisterBox--style2">
                    <div className="loginRegisterBox__content">
                        <h1 className="size40 white">Create <br/> Your Account</h1>
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
							<Grid columns={2}>
								<Grid.Row>
									<Grid.Column>
										<Form.Field>
											<label>First Name</label>
											<TextValidator
												onChange={handleChange}
												name="fname"
												value={fname}
												placeholder="First Name"
												validators={['required']}
												errorMessages={['Please enter your first name']}
											/>
										</Form.Field>
									</Grid.Column>
									<Grid.Column>
										<Form.Field>
											<label>Last Name</label>
											<TextValidator
												onChange={handleChange}
												name="lname"
												value={lname}
												placeholder="Last Name"
												validators={['required']}
												errorMessages={['Please enter your last name']}
											/>
										</Form.Field>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column>
										<Form.Field>
											<label>Email</label>
											<TextValidator
												onChange={handleChange}
												name="email"
												value={email}
												placeholder="i.e. johndeo@gmail.com"
												validators={['required', 'isEmail']}
												errorMessages={['Please enter your email', 'Please enter valid email']}
											/>
										</Form.Field>
									</Grid.Column>
									<Grid.Column>
										<Form.Field>
											<label>Mobile</label>
											<TextValidator
												type="number"
												onChange={handleChange}
												name="mobile"
												value={mobile}
												placeholder="Mobile"
												validators={['required']}
												errorMessages={['Please enter your mobile']}
											/>
										</Form.Field>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column>
										<Form.Field>
											<label>Password</label>
											<TextValidator
												onChange={handleChange}
												name="password"
												value={password}
												placeholder="****"
												validators={['required']}
												errorMessages={['Please choose your password']}
											/>
										</Form.Field>
									</Grid.Column>
									<Grid.Column>
										<Form.Field>
											<label>Last Name</label>
											<TextValidator
												onChange={handleChange}
												name="cpassword"
												value={cpassword}
												placeholder="****"
												validators={['required']}
												errorMessages={['Please confirm your password']}
											/>
										</Form.Field>
									</Grid.Column>
								</Grid.Row>
							</Grid>
                            
                            <div className="buttonBox">
                                <Button type="submit" fluid primary>Create My Account</Button>
                            </div>

                            <div className="switchPage">
								Already have an account click here to 
                                <Link to="/login">Login</Link>
                            </div>
                        </ValidatorForm>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterView

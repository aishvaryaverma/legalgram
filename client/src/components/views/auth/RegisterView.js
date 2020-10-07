import React, { useRef, useState } from "react";
// redux
import { connect } from 'react-redux';
import { register } from '../../../actions/auth';
import { paswordPattern } from '../../../utils/functions';
// components
import Alert from '../../layout/Alert';
import { Link } from 'react-router-dom';
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from '../../partials/common/TextValidator';
import { Button, Form, Grid, Message } from "semantic-ui-react";

const RegisterView = ({ register, history: { push } }) => {
	const formRef = useRef();

	const [state, setState] = useState({
		fname: '',
		lname: '',
		email: '',
		mobile: '',
		password: '',
		cpassword: '',
		showPassNotMatch: false
    });
    const { fname, lname, email, mobile, password, cpassword, showPassNotMatch } = state;
    
    const handleChange = ({target: { name, value }}) => {
		setState({ ...state, [name]: value });
	};

    const handleSubmit = e => {
		e.preventDefault();

		if(password !== cpassword) {
			return setState({ ...state, showPassNotMatch: true })
		} else {
			setState({ ...state, showPassNotMatch: false })
			const formData = {
				name: `${fname} ${lname}`,
				mobile,
				email,
				password
			}
			// register user
			register(formData, push);
		}
	};

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
						{showPassNotMatch && (
							<Message
								error
								header='There was some errors with your submission'
								list={[ 'Password not matched' ]}
							/>
						)}
						
						<Alert />
						
                        <ValidatorForm
                            ref={formRef}
                            onSubmit={handleSubmit}
							className="ui form"
							autoComplete="off"
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
												validators={['required', 'minStringLength:10']}
												errorMessages={['Please enter your mobile', 'Please enter valid mobile']}
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
												type="password"
												name="password"
												value={password}
												placeholder="Enter password"
                                    			validators={[
													'required',
													'matchRegexp:^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$'
												]}
												errorMessages={['Password is required.', 'Pattern not matched']}
												onKeyUp={e => paswordPattern(e.target.value, '#hintsRegister')}
											/>
										</Form.Field>
									</Grid.Column>
									<Grid.Column>
										<Form.Field>
											<label>Confirm Password</label>
											<TextValidator
												onChange={handleChange}
												type="password"
												name="cpassword"
												value={cpassword}
												placeholder="Confirm password"
												validators={['required']}
												errorMessages={['Please confirm your password']}
											/>
										</Form.Field>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<div className="passHints" id="hintsRegister">
										<span>6 Characters</span>
										<span>1 Special</span>
										<span>1 Uppercase</span>
										<span>1 Numeric</span>
									</div>
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

export default connect(null, { register })(RegisterView)

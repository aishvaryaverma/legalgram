import React, { useState, useEffect } from 'react';

const MyAccountContent = ({ user, userLoading }) => {
	const [state, setState] = useState({
		name: '',
		email: '',
		mobile: ''
	});
	const { name, email, mobile } = state;

	useEffect(() => {
		if(!userLoading) {
			setState(user);
		}
	}, [user, userLoading]);

	const onChange = ({ target: { name, value } }) => setState({ ...state, [name]: value });

	console.log(state)
	return (
		<div className="dashboardContent">
			<div className="dashboardContent__heading">
				<h1>My Account</h1>
			</div>
			<div className="dashboardContent__cards">
				<div className="dashboardContent__card">
					<form>
						<div className="ui grid">
							<div className="row">
								<div className="eight wide column">
									<div className="form-group">
										<label>Name</label>
										<input
											className="form-control"
											type="text"
											name="name"
											value={name}
											onChange={e => onChange(e)}
										/>
									</div>
								</div>
								<div className="eight wide column">
									<div className="form-group">
										<label>Email</label>
										<input
											className="form-control"
											type="text"
											name="email"
											value={email}
											onChange={e => onChange(e)}
										/>
									</div>
								</div>
								<div className="eight wide column">
									<div className="form-group">
										<label>Mobile</label>
										<input
											className="form-control"
											type="text"
											name="mobile"
											value={mobile}
											onChange={e => onChange(e)}
										/>
									</div>
								</div>
								{/* <div className="sixteen wide column">
									<div className="form-group">
										<label>About Yourself</label>
										<textarea cols="4" rows="5" className="form-control" placeholder="Message"></textarea>
									</div>
								</div> */}
								<div className="sixteen wide column">
									<button type="submit" className="btn-primary">Update</button>
								</div>
							</div>
						</div>
					</form>
				</div>
				<div className="dashboardContent__card">
					<h2>Change Password</h2>
					<form>
						<div className="ui grid">
							<div className="row">
								<div className="eight wide column">
									<div className="form-group">
										<label>Enter New Password</label>
										<input type="text" className="form-control" placeholder="New Password" />
									</div>
								</div>
								<div className="eight wide column">
									<div className="form-group">
										<label>Re-Type Password</label>
										<input type="text" className="form-control" placeholder="Re-Type Password" />
									</div>
								</div>
								<div className="sixteen wide column">
									<button type="submit" className="btn-primary">Update</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default MyAccountContent

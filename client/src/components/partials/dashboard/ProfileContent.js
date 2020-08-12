import React from 'react';

const MyAccountView = () => {
	return (
		<div className="dashboardContent">
			<div className="dashboardContent__heading">
				<h1>My Profile</h1>
			</div>
			<div className="dashboardContent__cards">
				<div className="dashboardContent__card">
					<form>
						<div className="ui grid">
							<div className="row">
								<div className="eight wide column">
									<div className="form-group">
										<label>First Name</label>
										<input type="text" className="form-control" value="Antonio"/>
									</div>
								</div>
								<div className="eight wide column">
									<div className="form-group">
										<label>Last Name</label>
										<input type="text" className="form-control" value="Murray" />
									</div>
								</div>
								<div className="eight wide column">
									<div className="form-group">
										<label>Email Address</label>
										<input type="text" className="form-control" placeholder="Email Address" />
									</div>
								</div>
								<div className="eight wide column">
									<div className="form-group">
										<label>Mobile Number</label>
										<input type="text" className="form-control" placeholder="Mobile Number" />
									</div>
								</div>
								<div className="sixteen wide column">
									<div className="form-group">
										<label>About Yourself</label>
										<textarea cols="4" rows="5" className="form-control" placeholder="Message"></textarea>
									</div>
								</div>
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

export default MyAccountView

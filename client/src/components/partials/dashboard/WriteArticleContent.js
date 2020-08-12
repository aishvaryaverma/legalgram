import React from 'react';

const MyAccountView = () => {
	return (
		<div className="dashboardContent">
			<div className="dashboardContent__heading">
				<h1>Write Article</h1>
			</div>
			<div className="dashboardContent__cards">
				<div className="dashboardContent__card">
					<form>
						<div className="ui grid">
							<div className="row">
								<div className="sixteen wide column">
									<div className="form-group">
										<label>Article Title</label>
										<input type="text" className="form-control" placeholder="Title"/>
									</div>
								</div>
								<div className="sixteen wide column">
									<div className="form-group">
										<label>Upload Image</label>
										<textarea rows="8" className="form-control uploadImage"></textarea>
									</div>
								</div>
								<div className="sixteen wide column">
									<div className="form-group">
										<label>Article</label>
										<textarea rows="12" className="form-control" placeholder="Write Article"></textarea>
									</div>
								</div>
								<div className="sixteen wide column">
									<button type="submit" className="btn-primary">Publish</button>
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

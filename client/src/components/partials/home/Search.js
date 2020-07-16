import React, { useState } from 'react';

const Search = () => {
	const [search, setSearch] = useState('');

	const onSubmit = e => {
		e.preventDefault();
	};

	return (
		<div className="postSearch">
			<div className="container">
				<div className="postSearch__text">Services Shared for Your Needs</div>
				<form className="postSearch__form" onSubmit={e => onSubmit(e)}>
					<input 
						type="text"
						name="search"
						value={search}
						autoComplete="off"
						placeholder="Search articles..."
						onChange={e => setSearch(e.target.value)}
					/>
					<button className="btn">
						<i className="fas fa-search"></i>
						<span>Search</span>
					</button>
				</form>
			</div>
		</div>
	)
}

export default Search

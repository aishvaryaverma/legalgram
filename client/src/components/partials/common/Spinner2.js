import React from "react";

export default ({ white }) => (
	<div className={`lds-roller ${white ? 'white': ''}`}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
);

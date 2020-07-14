import React from 'react';
import Header from './Header';

const Layout = ({ goBack, screenName, children }) => {
	return (
		<>
			<Header goBack={goBack} screenName={screenName} />

			<section className="screenContent">{children}</section>
		</>
	);
};

export default Layout;

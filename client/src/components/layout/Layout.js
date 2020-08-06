import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ goBack, screenName, children }) => {
	return (
		<>
			<Header goBack={goBack} screenName={screenName} />

			<section className="screenContent">{children}</section>

			<Footer />
		</>
	);
};

export default Layout;

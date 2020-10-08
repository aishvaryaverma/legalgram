import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';

const Layout = ({ children, footer }) => {
	return (
		<>
			<ToastContainer
				className="toastifyCustom"
				autoClose={true}
				position={toast.POSITION.BOTTOM_RIGHT}
			/>

			<Header />

			<section className="screenContent">{children}</section>

			{footer !== false && <Footer />}
		</>
	)
}

export default Layout

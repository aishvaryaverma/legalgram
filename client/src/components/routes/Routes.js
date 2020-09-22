import React from 'react';
// router
import { Switch, Route } from 'react-router-dom';
// components
import AuthRoute from './AuthRoute';
import PublicRoute from './PublicRoute';
import Buyers from '../pages/Buyers';
import Sellers from '../pages/Sellers';
import Brokers from '../pages/Brokers';
import TermsOfUse from '../pages/TermsOfUse';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import SaleEventTerms from '../pages/SaleEventTerms';
import ListingTermsConditions from '../pages/ListingTermsConditions';
import Faq from '../pages/Faq';
import About from '../pages/About';
import News from '../pages/News';
import NewsDetail from '../pages/NewsDetail';
import ConfirmAccount from '../pages/ConfirmAccount';
import ResetPassword from '../pages/ResetPassword';
import ConfirmEmail from '../pages/ConfirmEmail';
// auction asset details
import PropertyDetails from '../pages/PropertyDetails';
// dashboard pages
import MyAccount from '../pages/dashboard/MyAccount';
// search pages
import Search from '../pages/Search';
// not found page
import NotFound from '../pages/NotFound';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/buyers' component={Buyers} />
			<Route exact path='/sellers' component={Sellers} />
			<Route exact path='/brokers' component={Brokers} />
			<Route exact path='/terms-of-use' component={TermsOfUse} />
			<Route exact path='/privacy-policy' component={PrivacyPolicy} />
			<Route exact path='/sale-event-terms' component={SaleEventTerms} />
			<Route exact path='/listing-terms-conditions' component={ListingTermsConditions} />
			<Route exact path='/faq' component={Faq} />
			<Route exact path='/about' component={About} />
			<Route exact path='/news' component={News} />
			<Route exact path='/news/:url' component={NewsDetail} />
			<PublicRoute exact path='/auction/:propertyId/:assetname' component={PropertyDetails} />
			<PublicRoute exact path='/listing/:propertyId/:assetname' component={PropertyDetails} />
			{/* user routes */}
			<Route exact path='/user/confirm-account/:code' component={ConfirmAccount} />
			<Route exact path='/user/reset-password/:code' component={ResetPassword} />
			<Route exact path='/user/confirm-email/:code' component={ConfirmEmail} />
			{/* search */}
			<Route exact path='/commercial/search/' component={Search} />
			<Route exact path='/commercial/search/*' component={Search} />
			{/* account */}
			<AuthRoute exact path='/account' component={MyAccount} />
			{/* not found route: only at last always */}
			<Route exact component={NotFound} />
		</Switch>
	)
}

export default Routes

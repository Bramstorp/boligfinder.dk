import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import About from "./containers/About"
import Contactpage from "./containers/Contact"
import Homepage from "./containers/Homepage"
import Listing_Details from "./containers/Listing_Details"
import Listing from "./containers/Listing"
import SignIn from "./containers/SignIn"
import SignUp from "./containers/SignUp"
import SignUpAgent from "./containers/SignUpAgent"
import LogOut from "./containers/LogOut"
import Submit_House from "./containers/SubmitHouse"
import Submit_Listing from "./containers/SubmitListing"

import NotFound from './Component/NotFound';

import { Provider } from "react-redux"
import store from "./store"

const BaseRoutes  = () => (
	<Provider store={store}>
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route exact path="/contact" component={Contactpage} />
			<Route exact path="/listing_details/:slug" component={Listing_Details} />
			<Route exact path="/listing" component={Listing} />
			<Route exact path="/submit_house" component={Submit_House} />
			<Route exact path="/submit_listing" component={Submit_Listing} />
			<Route exact path="/about" component={About} />
			<Route exact path="/signin" component={SignIn} />
			<Route exact path="/signup" component={SignUp} />
			<Route exact path="/signupagent" component={SignUpAgent} />
			<Route exact path="/logout" component={LogOut} />
			<Route component={NotFound} />
		</Switch>
	</Provider>
)

export default BaseRoutes;

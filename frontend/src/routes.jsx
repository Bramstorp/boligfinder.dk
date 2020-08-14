import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import About from "./containers/About"
import Contactpage from "./containers/Contact"
import Homepage from "./containers/Homepage"
import Listing_Details from "./containers/Listing_Details"
import SignIn from "./containers/SignIn"
import SignUp from "./containers/SignUp"

import { Provider } from "react-redux"
import store from "./store"

const BaseRoutes  = () => (
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/contact" component={Contactpage} />
				<Route exact path="/listing_details/:id" component={Listing_Details} />
				<Route exact path="/about" component={About} />
				<Route exact path="/signin" component={SignIn} />
				<Route exact path="/signup" component={SignUp} />
			</Switch>
		</Router>
	</Provider>
)

export default BaseRoutes;

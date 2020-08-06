import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Layout from "./hocs/Layout"

import About from "./containers/About"
import Contact from "./containers/Contact"
import Homepage from "./containers/Homepage"
import Listing_Details from "./containers/Listing_Details"
import Listings from "./containers/Listings"
import SignIn from "./containers/SignIn"
import SignUp from "./containers/SignUp"

const App = () => (
	<Router>
		<Layout>
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/listing_details/:id" component={Listing_Details} />
				<Route exact path="/listings" component={Listings} />
				<Route exact path="/about" component={About} />
				<Route exact path="/signin" component={SignIn} />
				<Route exact path="/signup" component={SignUp} />
			</Switch>
		</Layout>
	</Router>
)

export default App;

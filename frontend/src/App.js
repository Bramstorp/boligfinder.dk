import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import BaseRoutes from "./routes"
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import CustomLayout from "./hocs/Layout"

class App extends Component {
	render(){
		return(
			<div className="App">
		      	<Router>
		      		<CustomLayout>
			          <BaseRoutes />
			        </CustomLayout>
		      	</Router>
		    </div>
	    )
	}
}

export default App;

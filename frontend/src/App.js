import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import Layout from "./hocs/Layout"
import BaseRoutes from "./routes"

const App = () => (
	<div className="App">
      	<Router>
      		<Layout>
	          <BaseRoutes />
	        </Layout>
      	</Router>
    </div>
)

export default App;

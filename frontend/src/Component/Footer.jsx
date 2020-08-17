import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/Footer.style.scss"

const Footer = () => (
	<div className="main-footer fixed-bottom">
		<div className="footer-middle">
			<div className="container">
				<div className="row">
					
					{/* Colum 1*/}
					<div className="col-md-3 col-sm-6">
						<h4>Lorem ipsum</h4>					
						<ul className="list-unstyled">
							<li>Lorem ipsum</li>
							<li>Lorem ipsum</li>
							<li>Lorem ipsum</li>
							<li>Lorem ipsum</li>
						</ul>
					</div>

					{/* Colum 2*/}
					<div className="col-md-3 col-sm-6">
						<h4>Lorem ipsum</h4>					
						<ul className="list-unstyled">
							<li>Lorem ipsum</li>
							<li>Lorem ipsum</li>
							<li>Lorem ipsum</li>
							<li>Lorem ipsum</li>
						</ul>
					</div>
					{/* Colum 3*/}
					<div className="col-md-3 col-sm-6">
						<h4>Lorem ipsum</h4>					
						<ul className="list-unstyled">
							<li>Lorem ipsum</li>
							<li>Lorem ipsum</li>
							<li>Lorem ipsum</li>
							<li>Lorem ipsum</li>
						</ul>
					</div>
					
					{/* Colum 4*/}
					<div className="col-md-3 col-sm-6">
						<h4>Lorem ipsum</h4>					
						<ul className="list-unstyled">
							<li>Lorem ipsum</li>
							<li>Lorem ipsum</li>
							<li>Lorem ipsum</li>
							<li>Lorem ipsum</li>
						</ul>
					</div>

					{/* Footer Bottom */}
					<div className="footer-bottom">
						<p className="text-xs-center">
							&copy;{new Date().getFullYear()} Boligfinder
						</p>
					</div>
				
				</div>
			</div>
		</div>
	</div>
)

export default Footer

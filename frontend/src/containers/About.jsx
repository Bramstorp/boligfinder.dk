import React from 'react'
import bootstrap, { Card, CardGroup } from 'react-bootstrap'
import '../assets/aboutCardSingle.style.scss'


class About extends React.Component {
	render() {
		return (
			<div>
				<img className="container img-container" src="" />

				<div className="container">

					<div className="row rowstyle">

						<div className="col-lg-6 left-side">

							<div className="about_title_top">THE BEST DEALS</div>
							<p className="about_title">Who are we</p>
							<p className="about_message">Nulla aliquet bibendum sem, non placerat risus venenatis at. Prae sent vulputate bibendum dictum. Cras at vehicula urna. Suspendisse fringilla lobortis justo, ut tempor leo cursus in. Nulla aliquet bibendum sem, non placerat risus venenatis at. Prae sent vulputate bibendum dictum. Cras at vehicula urna. Suspendisse fringilla lobortis justo, ut tempor leo cursus in.</p>
							<div className="pt-3">
								<button className="btn btn-primary col-lg-4">Read More</button>
							</div>
						</div>

						<div className="col-lg-6">
							<img className="side_img" src="https://via.placeholder.com/400x350" />
						</div>


						<div className="col-lg-12 pt-5">
							<div className="service_title_top">THE BEST DEALS</div>
							<p className="service_title">Service</p>

							<div className="row rowstyle">

								<div className="col">
									<div class="card">
										<div class="card-body">
											<h5 class="card-title">Consulting</h5>
											<p class="card-text left-side">Nulla aliquet bibendum sem, non placer risus venenatis at. Prae sent vulputate bibendum dictum.</p>
										</div>
									</div>
								</div>

								<div className="col">
									<div class="card">
										<div class="card-body">
											<h5 class="card-title">Real estate sales</h5>
											<p class="card-text left-side">Aliquet bibendum sem, non placerat risus venenatis at. Prae sent vulputate bibendum dictum. Cras at vehicula.</p>
										</div>
									</div>
								</div>

								<div className="col">
									<div class="card">
										<div class="card-body">
											<h5 class="card-title">Renting</h5>
											<p class="card-text left-side">Nulla aliquet bibendum sem, non placerat risus venenatis at. Prae sent vulputate bibendum dictum.</p>
										</div>
									</div>
								</div>

							</div>

							<div className="row rowstyle">

								<div className="col">
									<div class="card">
										<div class="card-body">
											<h5 class="card-title">Meditation</h5>
											<p class="card-text left-side">Aliquet bibendum sem, non placerat risus venenatis at. Prae sent vulputate bibendum dictum. Cras at vehicula.</p>
										</div>
									</div>
								</div>

								<div className="col">
									<div class="card">
										<div class="card-body">
											<h5 class="card-title">Evaluation</h5>
											<p class="card-text left-side">Bibendum sem, non placerat risus venenatis at. Prae sent vulputate bibendum dictum. Cras at vehicula.</p>
										</div>
									</div>
								</div>

								<div className="col">
									<div class="card">
										<div class="card-body">
											<h5 class="card-title">Price Consulting</h5>
											<p class="card-text left-side">Aliquet bibendum sem, non placerat risus venenatis at. Prae sent vulputate bibendum dictum. Cras at vehicula.</p>
										</div>
									</div>
								</div>

							</div>

						</div>

					</div>

					<div className="col-lg-12 pt-5 pb-4">

						<div className="row rowstyle info_numb">

							<div className="col colstyle">
								<h2 class="info_value">22</h2>
								<h5 class="info_object">Homes Sold</h5>
							</div>

							<div className="col colstyle">
								<h2 class="info_value">22</h2>
								<h5 class="info_object">Awards</h5>
							</div>

							<div className="col colstyle">
								<h2 class="info_value">22</h2>
								<h5 class="info_object">Rentals</h5>
							</div>

						</div>
					</div>

					<div className="row rowstyle">
						<div className="contact_us col">
							<button className="test btn btn-success col-lg-4">CONTACT US</button>
						</div>
					</div>


				</div>

			</div>
		)
	}
}

export default About
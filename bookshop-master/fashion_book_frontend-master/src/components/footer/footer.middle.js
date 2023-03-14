	import React, { Component } from "react"

	const FooterMiddle = () => (
		<div className="footer-widget">
				<div className="container">
					<div className="row">
						<div className="col-sm-8">
							<div className="single-widget">
								<h2>About Shopper</h2>
								<form action="#" className="form-footer container">
									<div className='row'>
									<input type="text" placeholder="Your email address" className='col-sm-4' />
									<button type="submit" className="">Submit</button>
									</div>	
								</form>
								<p>Sign up for Gmail to receive the latest news about us...</p>

							</div>
							</div>
							<div className="col-sm-4">
                				<div className="single-widget">
								<h2>Information About Us</h2>
								<ul className="nav nav-pills nav-stacked ">
									<li><i className='fas fa-map-marker-alt'></i><a href="#">Da Nang City</a></li>
									<li><i className='far fa-envelope'></i><a href="#">fpteducation@fpt.edu.vn</a></li>
									<li><i className='fas fa-phone-volume'></i><a href="#">+84 867 02 12 02</a></li>
									<li><i class="fab fa-facebook-f"></i><a href="#">BTEC DN</a></li>
									
								</ul>
								</div>
               				 </div>
						
					</div>
				</div>
			</div>
	)
	export default FooterMiddle
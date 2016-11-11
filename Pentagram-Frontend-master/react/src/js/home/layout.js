var React = require('react');

var HomePage = React.createClass({
	render: function (){
		return (
				<div className="image-container">
					<div className="home-page-body">
						<div className="col-md-3 col-img col-img-row1 one">
							<div className="photo-stats">
								<div>
									<div className="likes">
										<p className="photo-info"> 15 <span className="glyphicon glyphicon-heart" aria-hidden="true"></span></p>
									</div>
									<div className="comments">
										<p className="photo-info"> 43 <span className="glyphicon glyphicon-comment comment-icon" aria-hidden="true"></span></p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-3 col-img col-img-row2 two">
						</div>
						<div className="col-md-3 col-img three">
						</div>
						<div className="col-md-3 col-img col-img-row1 four">
						</div>
						<div className="col-md-3 col-img col-img-row2 five">
						</div>
						<div className="col-md-3 col-img six">
						</div>
						<div className="col-md-3 col-img col-img-row1 seven">
						</div>
						<div className="col-md-3 col-img col-img-row2 eight">
						</div>
						<div className="col-md-3 col-img nine">
						</div>
					</div>
				</div>
		)
	}
});

module.exports = HomePage;

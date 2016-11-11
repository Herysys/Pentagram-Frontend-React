var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var LoginView = React.createClass({
	//document.body.style.backgroundImage = "url('loginpicture.jpg')";
	render: function () {
		return (
			<div className="login-page">
			<center>
				<form>
					<h3 className="login-message"> Please login to continue. </h3>
		  			<div className="form-group input-group">
		    			<input type="username" className="form-control form-input" placeholder="Username"/>
		    			<span className="input-group-addon" id="start-date"><span className="glyphicon glyphicon-user"></span></span>
		  			</div>
		  			<div className="form-group input-group">
		    			<input type="password" className="form-control form-input" placeholder="Password" />
		    			<span className="input-group-addon" id="start-date"><span className="glyphicon glyphicon-edit"></span></span>
		  			</div>
		  			<button type="button" className="log-in-button">LOGIN</button>
		  			<h5 className="register-message"> If you do NOT have an account press <Link to="register" className="register-link">here</Link> to register.</h5>
				</form>
			</center>
			</div>

		);
	}
});

module.exports = LoginView;
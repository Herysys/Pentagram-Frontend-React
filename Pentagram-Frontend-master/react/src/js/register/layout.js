var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var RegisterForm = React.createClass({
	render: function () {
		return (
			<center>
				<form>
					<h3 className="login-message"> You can create your account here. </h3>
		  			<div className="form-group input-group">
		    			<input type="username" className="form-control form-input" placeholder="Username"/>
		    			<span className="input-group-addon" id="start-date"><span className="glyphicon glyphicon-user"></span></span>
		  			</div>
		  			<div className="form-group input-group">
		    			<input type="email" className="form-control form-input" placeholder="E-mail"/>
		    			<span className="input-group-addon" id="start-date"><span className="glyphicon glyphicon-envelope"></span></span>
		  			</div>
		  			<div className="form-group input-group">
		    			<input type="password" className="form-control form-input" placeholder="Password" />
		    			<span className="input-group-addon" id="start-date"><span className="glyphicon glyphicon-edit"></span></span>
		  			</div>
		  			<div className="form-group input-group">
		    			<input type="password" className="form-control form-input" placeholder="Re-type password" />
		    			<span className="input-group-addon" id="start-date"><span className="glyphicon glyphicon-edit"></span></span>
		  			</div>
		  			<button type="button" className="register-button">REGISTER</button>
		  			<h5 className="register-message"> If you already have an account click <Link to="login" className="register-link">here</Link> to login.</h5>
				</form>
			</center>

		);
	}
});

module.exports = RegisterForm;
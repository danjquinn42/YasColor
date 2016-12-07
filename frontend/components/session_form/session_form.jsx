import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: "", email: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.demoUser = this.demoUser.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	demoUser() {
		this.setState({password: 'password', email: 'demo@yascolor.com'});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user: user});
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup" className="question">
              Don't yet have an account? Sign up.
            </Link>;
		} else {
			return <Link to="/login" className="question">
              Already have an account? Log in.
            </Link>;
		}
	}

	renderErrors() {
		if (this.props.errors) {
			return(
				<ul>
					{this.props.errors.map((error, i) => (
						<li className="error" key={`error-${i}`}>
							{error}
						</li>
					))}
				</ul>
			);
		}
	}

  singUpOnly() {
    if (this.props.formType === 'signup') {
      return(
        <div className="name-and-photo">
					<div className="add-photo">Add a profile photo</div>
					<label for="name" className="non-display">Name</label>
            <input type="text"
							id="name"
              value={this.state.name}
              placeholder="name"
              onChange={this.update("name")}
              className="session-input" />
        </div>
      );
    }
  }

	render() {
		return (
      <div className="modal">
  			<section className="session-form-container group">
					<Link to="/">
						<img src={window.close} className="close"></img>
					</Link>
					<Link to="/" className="signup-logo">
            <img src={window.logo} className="logo"></img>
            <h1>Yas Color!</h1>
          </Link>
  				<form onSubmit={this.handleSubmit} className="session-form-box">
  					<h2 className="form-title">{this.props.formType}</h2> {this.navLink()}
  					{this.renderErrors()}
  					<div className="session-form">
              {this.singUpOnly()}

							<label for="email" className="non-display">Email</label>
  							<input type="text"
									id="email"
  								value={this.state.email}
                  placeholder="email"
  								onChange={this.update("email")}
  								className="session-input" />

								<label for="password" className="non-display">Password</label>
  							<input type="password"
									id="password"
  								value={this.state.password}
                  placeholder="password"
  								onChange={this.update("password")}
  								className="session-input" />

								<input className="button" type="submit" value="Submit" />
  					</div>
  				</form>
					<form onSubmit={this.handleSubmit}>
						<input type="submit"
							onClick={this.demoUser}
							className="button demo"
							value="Sign in as Guest User"
							/>
					</form>
  			</section>
      </div>
		);
	}

}

export default withRouter(SessionForm);

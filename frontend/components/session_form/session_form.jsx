import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: "", email: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
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

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
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
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

  nameInput() {
    if (this.props.formType === 'signup') {
      return(
        <label className="non-display"> Name
          <input type="text"
            value={this.state.name}
            placeholder="name"
            onChange={this.update("name")}
            className="session-input" />
        </label>
      );
    }
  }

	render() {
		return (
      <div>
        <div className="lights-down"></div>
  			<section className="session-form-container">
  				<form onSubmit={this.handleSubmit} className="session-form-box">
  					<h2 className="form-title">{this.props.formType}</h2> {this.navLink()}
  					{this.renderErrors()}
  					<div className="session-form">
              {this.nameInput()}
  						<label className="non-display"> Email
  							<input type="text"
  								value={this.state.email}
                  placeholder="email"
  								onChange={this.update("email")}
  								className="session-input" />
  						</label>
  						<label className="non-display"> Password
  							<input type="password"
  								value={this.state.password}
                  placeholder="password"
  								onChange={this.update("password")}
  								className="session-input" />
  						</label>
  						<input type="submit" value="Submit" />
  					</div>
  				</form>
  			</section>
      </div>
		);
	}

}

export default withRouter(SessionForm);

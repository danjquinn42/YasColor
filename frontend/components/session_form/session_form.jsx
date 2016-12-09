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

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user: user});
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup"  className="question">
              Don't yet have an account? <strong>Sign up here.</strong>
            </Link>;
		} else {
			return <Link to="/login" className="question">
              Already have an account? <strong>Log in here.</strong>
            </Link>;
		}
	}

  // formIsSame() {
  //   return (this.formType === this.props.formType);
  // }


	renderErrors(type) {
		if (this.props.errors) { //&& this.formIsSame()
  		return (
      	<ul>
        	{	this.props.errors.map((error, i) => {
            if ( error.includes(type)) {
              return ( <li className="error" key={`error-${i}`}>{ error }</li> );
            }})}
				</ul>
  		);
    }
	}


  demoUser() {
    this.setState({password: 'password', email: 'demo@yascolor.com'});
  }

  demo() {
    if (this.props.formType === "login") {
      return(
        <form onSubmit={this.handleSubmit}>
          <input type="submit"
            onClick={this.demoUser}
            className="demo"
            value="Sign in as Guest User"
            />
        </form>
      );
    }
  }

  signUpOnly() {
    if (this.props.formType === 'signup') {
      return(
        <div className="name-and-photo">
					<div className="add-photo">
            <img src={window.user} className="profile-pic"></img>
            <h4>Add a profile photo</h4>
          </div>
					<label htmlFor="name" className="non-display">Name</label>
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
  					<div className="session-form">
              {this.signUpOnly()}
            {this.renderErrors('Name')}

							<label htmlFor="email" className="non-display">Email</label>
  							<input type="text"
									id="email"
  								value={this.state.email}
                  placeholder="email"
  								onChange={this.update("email")}
  								className="session-input" />
                {this.renderErrors('Email')}

                <label htmlFor="password" className="non-display">Password</label>
  							<input type="password"
									id="password"
  								value={this.state.password}
                  placeholder="password"
  								onChange={this.update("password")}
  								className="session-input" />
                {this.renderErrors('Password')}

								<input className="button" type="submit" value="Submit" />
  					</div>
  				</form>
					{ this.demo() }
  			</section>
      </div>
		);
	}

}

export default withRouter(SessionForm);

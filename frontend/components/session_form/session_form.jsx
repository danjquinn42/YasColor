import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: "",
      email: "",
      password: "",
      formType: props.formType };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.demoUser = this.demoUser.bind(this);
    this.changeForm = this.changeForm.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
    e.stopPropagation();
		const user = this.state;
    if (this.state.formType === 'login') {
  		this.props.login({user: user});
      this.props.showSignIn();
    } else {
      this.props.signup({user: user});
      this.props.showSignIn();
    }
	}

  invisible() {
    if (this.props.authFormVisible) {
      return 'visible';
    } else {
      return 'non-display';
    }
  }

  selectColor(colorId) {
    return (event) => { this.setState({ selected: colorId }); };
  }

  changeForm() {
    if (this.state.formType === 'login'){
      return (event) => {
        this.props.clearErrors();
        this.setState({ formType: 'signup' });
      };
    } else {
      return (event) => {
        this.props.clearErrors();
        this.setState({ formType: 'login' });
      };
    }
  }

	redirectQuestion() {
		if (this.state.formType === "signup") {
			return (
        <h3 onClick={this.changeForm()}
            className="question">
          Already have an account? <strong>Log in here.</strong>
      </h3>
          );
		} else {
			return (
        <h3 onClick={this.changeForm()}
          className="question">
          Dont yet have an account? <strong>Sign up here.</strong>
      </h3>
          );
		}
	}


	renderErrors(type) {
		if (this.props.errors) {
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
    if (this.state.formType === "login") {
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
    if (this.state.formType === 'signup') {
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

  closeForm(){
    return() => {
      this.setState({ formType: 'login' });
      this.props.hideSignIn();
    };
  }


	render() {
		return (
      <div className={`modal ${this.invisible()}`}>
        <div
          className="splashlink"
          onClick={this.props.clearErrors}
          onClick={this.closeForm()}>
        </div>
  			<section className="session-form-container group">
					<div
            onClick={this.props.clearErrors}
            onClick={this.closeForm()}>
						<img src={window.close}
              className="close"
              onClick={this.closeForm()}></img>
					</div>
					<Link to="/" className="signup-logo">
            <img src={window.logo} className="logo"></img>
            <h1>Yas Color!</h1>
          </Link>
  				<form onSubmit={this.handleSubmit} className="session-form-box">
  					<h2 className="form-title">{this.state.formType}</h2>
            {this.redirectQuestion()}
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

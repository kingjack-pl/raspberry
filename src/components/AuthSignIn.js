import React, {Component, Fragment} from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { SignIn, SignOut } from "../actions";
import Loader from "./Loader";

class AuthSignIn extends Component {
	state = {loading: false};

	onSubmit = values => {
		this.setState({loading: true});
		this.props.SignIn(values, () => this.setState({loading: false}));
	};

    renderField = field => (
        <div className={field.meta.touched && field.meta.error ? 'formSignIn__group error' : 'formSignIn__group'}>
            <input
				placeholder={field.placeholder}
                type={field.type}
                {...field.input}
            />
            <span />
			<div className="errorMessage">
                {field.meta.touched ? field.meta.error : ""}
            </div>
        </div>
    );


	render() {
		const { handleSubmit, SignOut, auth: { status, message }} = this.props;

		if(status) {
			return (
				<div className="signedMessage">
					<h3>{message}</h3>
                	<button className="btnDefault btnDefault--pink" onClick={() => SignOut()}>SIGN OUT</button>
            	</div>
			)
		}

		return (
			<Fragment>
				<Loader loading={this.state.loading}/>
				<h3>Are you a Raspberry Knight?</h3>
				<form className="formSignIn" onSubmit={handleSubmit(this.onSubmit)}>
					<Field
						name="login"
						type="text"
						placeholder="Login"
						component={this.renderField}
					/>
					<Field
						name="password"
						type="password"
						placeholder="Password"
						component={this.renderField}

					/>
					<button className="btnDefault btnDefault--pink">LOG IN</button>
				</form>
			</Fragment>
		);
	}
}

const validate = ({ login, password }) => {
    const errors = {};

    if (!login) {
        errors.login = 'Please complete login field!'
    }

    if (!password) {
        errors.password = 'Please complete password field!'
    }

    return errors
};

const mapStateToProps = ({ auth }) => ({
    auth
});

export default compose(
	reduxForm({validate, form: "SignIn"}),
    connect(mapStateToProps, { SignIn, SignOut })
)(AuthSignIn);

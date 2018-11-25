import { AUTH_USER, AUTH_ERR } from "./types";
import axios from "axios";

export const SignIn = (formData, callback) => async dispatch => {
	try {
		const response = await axios.post(
			"https://apiraspberry.herokuapp.com/login",
			formData
		);
		dispatch({
			type: AUTH_USER,
			payload: response.data
		});
		localStorage.setItem("status", response.data.status);
		localStorage.setItem("message", response.data.message);
		callback();
	} catch (e) {
		dispatch({
			type: AUTH_ERR,
			payload: "Error: No connection with api"
		});
	}
};

export const SignOut = () => {
	localStorage.removeItem("message");
	localStorage.removeItem("status");
	return {
		type: AUTH_USER,
		payload: ""
	};
};

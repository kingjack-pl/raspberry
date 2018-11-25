import { AUTH_USER, AUTH_ERR } from "../actions/types";

export default (state = {}, action) => {
	switch (action.type) {
		case AUTH_USER:
			return action.payload;
		case AUTH_ERR:
			return action.payload;
		default:
			return state;
	}
};

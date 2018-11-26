import { AUTH_USER, AUTH_ERR } from "../actions/types";

export default (state = {}, action) => {
	if (action.type === AUTH_USER || action.type === AUTH_ERR) {
		return action.payload;
	}
	return state;
};

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import App from "./components/App";
import Home from "./components/Home";

const defaultState = {
	auth: {
		message: localStorage.getItem("message"),
		status: localStorage.getItem("status")
	}
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App>
				<Route path="/" exact component={Home} />
			</App>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);

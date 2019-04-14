import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from '.';

const loggerMiddleware = createLogger();

export const createReduxStore = () => {
	return createStore(
		rootReducer,
		applyMiddleware(
			thunkMiddleware,
		  	loggerMiddleware
		)
	);
};

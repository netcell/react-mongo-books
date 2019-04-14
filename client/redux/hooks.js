import React, { createContext, useContext, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';

export const ReduxContext = createContext();

export const ReduxProvider = ({ store, children }) => {
	return <ReduxContext.Provider value={store}>
		<Provider store={store}>
			{children}
		</Provider>
	</ReduxContext.Provider>
}

/**
 * The same as mapStateToProps
 */
export const useReduxState = (mapState) => {
	const store = useContext(ReduxContext);
	const initialState = mapState(store.getState());
	const [state, setState] = useState(initialState);

	useEffect(() => {
		/** Return to unsubscribe when unmounted */
		return store.subscribe(() => {
			const newState = mapState(store.getState());
			if (state !== newState) {
				setState(newState);
			}
		});
	});
	return state;
}

/**
 * The same as mapDispatchToProps
 */
export const useReduxActions = (mapActions) => {
	const store = useContext(ReduxContext);
	const dispatch = store.dispatch;
	return mapActions(dispatch);
}

export const useReduxActionCreators = (actionCreators) => {
	return useReduxActions(dispatch => bindActionCreators(actionCreators, dispatch));
}
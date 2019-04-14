import {createResource, reduceReducers} from 'redux-rest-resource';

export const createPaginatedResource = (opts) => {
	opts.actions = opts.actions || {};
	opts.actions.fetch = opts.actions.fetch || {};
	opts.actions.fetch.transformResponse = res => ({res, body: res.body.items});

	const {
		types,
		actions,
		rootReducer: reducer,
	} = createResource(opts);

	const fetchKey = Object.keys(types)
		.find(type => type.match(/FETCH/));
	const fetchType = types[fetchKey];

	const rootReducer = reduceReducers(
		reducer,
		(state, action) => {
			if (action.type === fetchType && action.status == 'resolved') {
				const {
					pages, page, hasNext, hasPrev,
				} = action.res.body;
				return {
					...state, 
					pages, page, hasNext, hasPrev,
				};
			} else {
				return state;
			}
		}
	)

	return {
		types,
		actions,
		rootReducer,
	}
}
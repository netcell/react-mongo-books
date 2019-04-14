import { createPaginatedResource } from '../utils/createPaginatedResource';

export const {
	types,
	actions,
	rootReducer,
} = createPaginatedResource({
  	name: 'book',
	url: `${process.env.SERVER_HOST}/books/:id`,
	actions: {
		update: {
			assignResponse: true
		}
	}
});
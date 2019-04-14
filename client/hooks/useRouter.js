import queryString from 'query-string';
import useReactRouter from 'use-react-router';

export const useRouter = () => {
	const {
		location,
		history,
		match,
	} = useReactRouter();

	const query = queryString.parse(location.search) || {};

	const pushQuery = (newQuery) => {
		history.push({
			pathname: location.pathname,
			search: queryString.stringify({
				...newQuery,
			})
		})
	};
	
	return {
		location,
		history,
		match,
		query,
		pushQuery,
	}
}
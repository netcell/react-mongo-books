import React, { useEffect } from 'react';
import { BookItemEdit } from '../../components/BookListing/BookItemEdit';
import { BookListing } from '../../components/BookListing/BookListing';
import { BookListingNav } from '../../components/BookListing/BookListingNav';
import { BookListingSearch } from '../../components/BookListing/BookListingSearch';
import { useRouter } from '../../hooks/useRouter';
import { useReduxActionCreators } from '../../redux/hooks';
import { actions as bookActions } from '../../redux/reducers/books';

export const AdminPage = () => {
	const { location, query } = useRouter();
	const fetchBooks = useReduxActionCreators(bookActions.fetchBooks);

	useEffect(() => {
		fetchBooks({}, { query });
	}, [location.search]);

	return <div>
		<h1>Admin</h1>
		<BookListingSearch/>
		<BookListing BookItemDisplayComponent={BookItemEdit}/>
		<BookListingNav/>
	</div>
};
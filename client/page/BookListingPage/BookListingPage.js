import React, { useEffect } from 'react';
import { BookItemDisplay } from '../../components/BookListing/BookItemDisplay';
import { BookListing } from '../../components/BookListing/BookListing';
import { BookListingNav } from '../../components/BookListing/BookListingNav';
import { BookListingSearch } from '../../components/BookListing/BookListingSearch';
import { useRouter } from '../../hooks/useRouter';
import { actions as bookActions } from '../../redux/reducers/books';
import { useReduxActionCreators } from '../../redux/hooks';

export const BookListingPage = () => {
	const { location, query } = useRouter();
	const fetchBooks = useReduxActionCreators(bookActions.fetchBooks);

	useEffect(() => {
		fetchBooks({}, { query });
	}, [location.search]);

	return <div>
		<BookListingSearch/>
		<BookListing BookItemDisplayComponent={BookItemDisplay}/>
		<BookListingNav/>
	</div>
};
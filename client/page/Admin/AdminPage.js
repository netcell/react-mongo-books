import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BookListingWithAdd } from '../../components/BookAdmin/BookListingWithAdd';
import { BookListingNav } from '../../components/BookListing/BookListingNav';
import { BookListingSearch } from '../../components/BookListing/BookListingSearch';
import { useRouter } from '../../hooks/useRouter';
import { useReduxActionCreators } from '../../redux/hooks';
import { actions as bookActions } from '../../redux/reducers/books';

const AdminHeader = styled.h1`
	text-align: center;
	text-transform: uppercase;	
`

export const AdminPage = () => {
	const { location, query } = useRouter();
	const fetchBooks = useReduxActionCreators(bookActions.fetchBooks);

	useEffect(() => {
		fetchBooks({}, { query });
	}, [location.search]);

	return <div>
		<AdminHeader>Admin</AdminHeader>
		<BookListingSearch/>
		<BookListingWithAdd/>
		<BookListingNav/>
	</div>
};
import React from 'react';
import { BookItemEdit } from './BookItemEdit';
import { BookListing } from '../BookListing/BookListing';

export const BookListingWithAdd = () => {
	return <BookListing BookItemDisplayComponent={BookItemEdit}>
		<BookItemEdit />
	</BookListing>
}
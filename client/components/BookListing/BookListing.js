import React from 'react';
import styled from 'styled-components';
import { useReduxState } from '../../redux/hooks';

const BookListingWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(230px, auto));
	grid-gap: 5px;
	text-align: center;
	padding: 20px;
	background: white;
`

const Loader = () => {
	return <div>
		Loading ...
	</div>
}

export const BookListing = ({
	BookItemDisplayComponent,
	children
}) => {
	const books = useReduxState(state => state.books.items);
	const isFetching = useReduxState(state => state.books.isFetching);

	return <BookListingWrapper>
		{
			isFetching && <Loader />
		}
		{children}
		{
			(!isFetching) && books.map(book => (
				<BookItemDisplayComponent key={book.id} {...book} />
			))
		}
	</BookListingWrapper>;	
};
import React from 'react';
import styled from 'styled-components';
import {
	styleBookItemWrapper,
	styleBookItemImageWrapper,
	styleBookInfoWrapper,
	styleBookTitle,
	styleAuthorTitle,
} from './BookItemStyles';
import { useInput } from '../../hooks/useInput';
import { useReduxActionCreators, useReduxState } from '../../redux/hooks';
import { actions as bookActions } from '../../redux/reducers/books';

const BookItemWrapper = styled.div`
	${styleBookItemWrapper}
	position: relative;
`
const BookItemImageWrapper = styled.div`${styleBookItemImageWrapper}`
const BookInfoWrapper = styled.div`
	${styleBookInfoWrapper}
	input {
		margin: 0 0 7px 0;
		width: 100%;
		padding: 5px;
		box-sizing: border-box;
	}
`
const BookTitle   = styled.input`${styleBookTitle}`
const AuthorTitle = styled.input`${styleAuthorTitle}`
const UpdateButton = styled.button`
	width: 100%;
	display: block;
	font-size: 16px;
	padding: 5px;
`

const RemoveButton = styled.div`
	position: absolute;
	width: 30px;
	height: 30px;
	background: red;
	border-radius: 30px;
	top: 10px;
	right: 10px;
	display: none;
	color: white;
	line-height: 30px;
	text-align: center;
	cursor: pointer;

	${BookItemWrapper}:hover & {
		display: block;
	}
`

const cleanAuthorsString = (authorsString) => {
	return authorsString
		.split(',')
		.map(authorString => authorString.trim())
		.join(',')
}

export const BookItemEdit = ({
	id,
	title,
	authors,
	image_url
}) => {
	const isUpdating = useReduxState(state => state.books.isUpdating);
	const isDeleting = useReduxState(state => state.books.isDeleting);
	const updateBook = useReduxActionCreators(bookActions.updateBook);
	const deleteBook = useReduxActionCreators(bookActions.deleteBook);

	const imageUrlInputProps = useInput(image_url);
	const titleInputProps = useInput(title);
	const authorsInputProps = useInput(authors.join(','));

	const touched = 
		titleInputProps.value    != title || 
		imageUrlInputProps.value != image_url ||
		cleanAuthorsString(authorsInputProps.value) != authors.join(',');

	const handleUpdateBook = () => {
		updateBook({
			id,
			title: titleInputProps.value,
			authors: cleanAuthorsString(authorsInputProps.value).split(','),
			image_url: imageUrlInputProps.value,
		});
	}

	const handleDeleteBook = () => {
		deleteBook({
			id,
		});
	}

	const isProcessing = isUpdating || isDeleting;

	return <BookItemWrapper>
		<BookItemImageWrapper>
			<img src={image_url} />
		</BookItemImageWrapper>
		<BookInfoWrapper>
			<BookTitle type="text" {...imageUrlInputProps}  />
			<BookTitle type="text" {...titleInputProps}  />
			<AuthorTitle type="text" {...authorsInputProps}  />
			{(touched || isDeleting) && <UpdateButton onClick={handleUpdateBook} disabled={isProcessing}>
				{isProcessing ? 'Updating' : 'Update'}
			</UpdateButton>}
		</BookInfoWrapper>
		{(!isUpdating) && <RemoveButton onClick={handleDeleteBook}>X</RemoveButton>}
	</BookItemWrapper>
		
}
import React from 'react';
import styled from 'styled-components';
import {
	styleBookItemWrapper,
	styleBookItemImageWrapper,
	styleBookInfoWrapper,
	styleBookTitle,
	styleAuthorTitle,
} from '../BookListing/BookItemStyles';
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
	authors = [],
	image_url
}) => {
	const {
		isUpdating,
		isCreating,
		isDeleting,
	} = useReduxState(state => state.books);
	const {
		createBook,
		updateBook,
		deleteBook,
	} = useReduxActionCreators(bookActions);

	const imageUrlInputProps = useInput(image_url);
	const titleInputProps = useInput(title);
	const authorsInputProps = useInput(authors.join(','));

	const touched = 
		titleInputProps.value    != title || 
		imageUrlInputProps.value != image_url ||
		cleanAuthorsString(authorsInputProps.value) != authors.join(',');

	const handleCreateBook = () => {
		createBook({
			title: titleInputProps.value,
			authors: cleanAuthorsString(authorsInputProps.value).split(','),
			image_url: imageUrlInputProps.value,
		});
	}

	const handleUpdateBook = () => {
		updateBook({
			id,
			title: titleInputProps.value,
			authors: cleanAuthorsString(authorsInputProps.value).split(','),
			image_url: imageUrlInputProps.value,
		});
	}

	const handleDeleteBook = () => {
		if (id) {
			deleteBook({ id });
		}
	}

	const isProcessing = isUpdating || isDeleting;

	return <BookItemWrapper>
		<BookItemImageWrapper>
			<img src={id ? image_url : imageUrlInputProps.value} />
		</BookItemImageWrapper>
		<BookInfoWrapper>
			<BookTitle type="text" {...imageUrlInputProps}  />
			<BookTitle type="text" {...titleInputProps}  />
			<AuthorTitle type="text" {...authorsInputProps}  />
			{!id && <UpdateButton onClick={handleCreateBook} disabled={isCreating}>
				{isCreating ? 'Creatiing' : 'Create'}
			</UpdateButton>}
			{id && (touched || isDeleting) && <UpdateButton onClick={handleUpdateBook} disabled={isProcessing}>
				{isProcessing ? 'Updating' : 'Update'}
			</UpdateButton>}
		</BookInfoWrapper>
		{(id && !isUpdating) && <RemoveButton onClick={handleDeleteBook}>X</RemoveButton>}
	</BookItemWrapper>
		
}
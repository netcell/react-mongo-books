import React from 'react';
import styled from 'styled-components';
import {
	styleBookItemWrapper,
	styleBookItemImageWrapper,
	styleBookInfoWrapper,
	styleBookTitle,
	styleAuthorTitle,
} from './BookItemStyles';

const BookItemWrapper      = styled.div`${styleBookItemWrapper}`
const BookItemImageWrapper = styled.div`${styleBookItemImageWrapper}`
const BookInfoWrapper      = styled.div`${styleBookInfoWrapper}`
const BookTitle            = styled.div`${styleBookTitle}`
const AuthorTitle          = styled.div`${styleAuthorTitle}`

export const BookItemDisplay = ({
	title,
	authors,
	image_url
}) => {
	return <BookItemWrapper>
		<BookItemImageWrapper>
			<img src={image_url} />
		</BookItemImageWrapper>
		<BookInfoWrapper>
			<BookTitle>{title}</BookTitle>
			<AuthorTitle>{authors.join(', ')}</AuthorTitle>
		</BookInfoWrapper>
	</BookItemWrapper>
		
}
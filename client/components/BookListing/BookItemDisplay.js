import React from 'react';
import styled from 'styled-components';

const BookItemWrapper = styled.div`
	padding: 5px;
	box-sizing: border-box;
	&:hover {
		box-shadow: 0 0 20px rgba(0,0,0,.1);
		z-index: 1;
	}
`;

const BookItemImageWrapper = styled.div`
	text-align: center;
	height: 200px;
	overflow: hidden;
	img {
		height: 200px;
	}
`;

const BookInfoWrapper = styled.div`
	text-align: left;
	box-sizing: border-box;
	padding: 20px;
`

const BookTitle = styled.div`
	font-size: 18px;
`;

const AuthorTitle = styled.div`
	font-size: 14px;
`;

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
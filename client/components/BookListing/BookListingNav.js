import classnames from 'classnames';
import queryString from 'query-string';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useRouter } from '../../hooks/useRouter';
import { useReduxState } from '../../redux/hooks';

const PaginateLink = styled(({ page, disabled, children, ...props }) => {
	const {
		location,
		query,
	} = useRouter();

	if (disabled) {
		return <div/>;
	} else {
		return <Link {...props} to={{
			...location,
			search: queryString.stringify({
				...query,
				page
			})
		}}>
			{children ? children : (page + 1)}
		</Link>;
	}
})`
	text-decoration: none;
	margin: 0 5px;
	color: black;
	border-radius: 50%;
	width: 27px;
	height: 27px;
	display: inline-block;
	line-height: 28px;
	text-align: center;
	&:hover {
		font-weight: 400;
		background: #189eff;
		color: #fff;
	}
`

const PaginateLinkCurrent = styled(PaginateLink)`
	font-weight: 400;
	background: #189eff;
	color: #fff;
`

const PaginateLinkNav = styled(PaginateLink)`
	background: #fff;
	border: 1px solid #c6c6c6;
`

const NavWrapper = styled.nav`
	text-align: right;
	font-size: 20px;
	margin: 20px 30px 30px 30px;
`

const getDisplayPages = (page = 0, pages = 0) => {
	const maxPage = pages - 1;
	console.log(maxPage < page + 2)
	if (page < 3) {
		return [...Array(
			Math.min(pages, 5)
		).keys()];
	} else if (maxPage < page + 2) {
		return [...Array(5).keys()].map(index => index + (pages - 5));
	} else {
		return [...Array(5).keys()].map(index => index + (page - 2));
	}
}

export const BookListingNav = () => {
	let {
		page,
		pages,
		hasNext,
		hasPrev
	} = useReduxState(state => state.books);

	page = page || 0;
	
	const displayPages = getDisplayPages(page, pages);
	console.log(classnames({
		current: 0 == page
	}))

	return <NavWrapper>
		<PaginateLinkNav page={page - 1} disabled={!hasPrev}>{'<'}</PaginateLinkNav>
		{displayPages.map(index => (index == page) ? (
			<PaginateLinkCurrent page={index} key={index} />
		) : (
			<PaginateLink page={index} key={index} />
		))}
		<PaginateLinkNav page={page + 1} disabled={!hasNext}>{'>'}</PaginateLinkNav>
	</NavWrapper>
}
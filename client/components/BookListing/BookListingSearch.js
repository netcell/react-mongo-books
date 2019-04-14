import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDebounceInput } from '../../hooks/useDebouncedInput';
import { useRouter } from '../../hooks/useRouter';

const SearchWrapper = styled.header`
	padding: 20px;
	text-align: center;
`

const SearchInput = styled.input`
	outline: none;
	width: 400px;
	max-width: 90%;
	padding: 10px;
	border-radius: 10px;
	border: 1px solid #ccc;
	font-size: 20px;
`

export const BookListingSearch = () => {
	const {
		query,
		pushQuery,
	} = useRouter();

	const {
		value,
		debouncedValue,
		handleChange
	} = useDebounceInput(query.q, 500);

	useEffect(() => {
		const term = (debouncedValue || "").trim();
		pushQuery({
			...query,
			page: 0,
			q: term,
		})
	}, [debouncedValue]);

	return <SearchWrapper>
		<SearchInput type="text" onChange={handleChange} value={value} placeholder="Tìm kiếm"/>
	</SearchWrapper>
}
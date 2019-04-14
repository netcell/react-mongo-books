import React from 'react';
import { Route } from 'react-router-dom';
import { BookListingPage } from './page/BookListingPage/BookListingPage';

export const Routes = () => {
	return <>
		<Route path="/" exact component={BookListingPage}/>
	</>;
}
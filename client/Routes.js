import React from 'react';
import { Route } from 'react-router-dom';
import { BookListingPage } from './page/BookListingPage/BookListingPage';
import { AdminPage } from './page/Admin/AdminPage';

export const Routes = () => {
	return <>
		<Route path="/" exact component={BookListingPage}/>
        <Route path="/admin" component={AdminPage} />
	</>;
}
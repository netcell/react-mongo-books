import {combineReducers} from 'redux';
import {rootReducer as booksReducer} from './reducers/books';

export const rootReducer = combineReducers({
	books: booksReducer
});
import express from 'express';
import Book from '../../Models/Book.mjs';

export const booksRoute = express.Router();

booksRoute.route('/')
	.get(async (req, res) => {
		let {
			page,
			perPage,
			q,
		} = req.query;

		page = parseInt(page) || 0;
		perPage = parseInt(perPage) || 5;

		try {
			const {
				books,
				pages,
			} = await Book.fetch(q, page, perPage);

			res.status(200).send({
				items: books,
				pages: pages,
				page: page,
				perPage: perPage,
				hasNext: page < pages - 1,
				hasPrev: page > 0,
			});
		} catch (error) {
			res.status(500).send({
				error
			});
		}
	})
	.post(async (req, res) => {
		let {
			title,
			authors,
			image_url,
		} = req.body;

		try {
			const book = await Book.create({
				title,
				authors,
				image_url,
			});

			res.status(200).send(book);
		} catch (error) {
			res.status(500).send({
				error
			});
		}
	})
	.delete(async (req, res) => {
		res.status(500).send();
	})

booksRoute.route('/:bookId')
	.patch(async (req, res) => {
		const {
			bookId
		} = req.params;
		const {
			title,
			authors,
			image_url,
		} = req.body;

		try {
			const book = await Book.findOneAndUpdate({
				_id: bookId
			}, {
				title,
				authors,
				image_url,
			}, {
				new: true
			});

			res.status(200).send(book);
		} catch (error) {
			res.status(500).send({
				error
			});
		}
	})
	.delete(async (req, res) => {
		const {
			bookId
		} = req.params;

		try {
			await Book.findOneAndDelete({
				_id: bookId
			});

			await new Promise(resolve => setTimeout(resolve, 2000));

			res.status(200).send();
		} catch (error) {
			res.status(500).send({
				error
			});
		}
	})
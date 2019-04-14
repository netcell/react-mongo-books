const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Book = new Schema({
	authors: {
		type: [String],
		required: true,
	},
	image_url: String,
	title: {
		type: String,
		required: true,
	}
}, {
	toObject: {
		getters: true
	},
	toJSON: {
		getters: true
	}
});

class BookClass {
	get id() {
		return this._id;
	}
	static async fetch(searchTerm, page, perPage) {
		const query = !searchTerm ? {} : {
			$text: { 
				$search: searchTerm
			},
		};
		const [
			books,
			numberOfBooks,
		] = await Promise.all([
			this.find(query)
				.skip(page * perPage)
				.limit(perPage),
			this.count(query)
		]);

		return {
			books,
			numberOfBooks,
			pages: Math.ceil(numberOfBooks / perPage),
		}
	}
}

Book.loadClass(BookClass);

Book.index({
	title: 'text',
	authors: 'text',
}, {
	weights: {
		title: 5,
		authors: 1,
	},
});

module.exports = mongoose.model('Book', Book);
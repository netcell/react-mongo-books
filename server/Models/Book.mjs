import mongoose from 'mongoose';

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
});

class BookClass {
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

export default mongoose.model('Book', Book);
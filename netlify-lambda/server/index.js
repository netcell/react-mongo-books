require('dotenv/config');
const connected = require('./db.js');

const app = require('./app.js');
const booksRoute = require('./Routes/Books/index.js');

app.use('/books', booksRoute);

connected
	.then(() => {
		app.listen(3000, () => {
			console.log('Listening to port', 3000);
		});
	});
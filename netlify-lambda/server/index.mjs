import 'dotenv/config';
import connected from './db.mjs';

import { app } from './app.mjs';
import { booksRoute } from './Routes/Books/index.mjs';

app.use('/books', booksRoute);

connected
	.then(() => {
		app.listen(3000, () => {
			console.log('Listening to port', 3000);
		});
	});
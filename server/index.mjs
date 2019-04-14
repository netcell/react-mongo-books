import 'dotenv/config';
import connected from './db.mjs';

import { app } from './app.mjs';
connected
	.then(() => {
		app.listen(3000, () => {
			console.log('Listening to port', 3000);
		});
	});
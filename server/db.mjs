import mongoose from 'mongoose';

const connected = mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true
});

export const mongooseMiddleWare = (req, res, next) => {
	connected.then(() => next());
}

export default connected;
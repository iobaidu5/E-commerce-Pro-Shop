import mongoose from 'mongoose';

const connectDB = () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDB Connected:`);

    } catch (error) {
        console.log(`Error  : ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;
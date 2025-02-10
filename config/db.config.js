import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true

        });
        console.log(" DB Connected Successfully.");
    } catch (error) {
        console.error("DB Connection failed: ", error.message);
        process.exit(1);
    }
}

export default connectDB;
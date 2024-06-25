import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
    mongoose.set('strictQuery', true)
    if (isConnected) {
        console.log('MongoDB is already connected');
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI)

        isConnected = true;
        console.log('MONGODB connected');
    } catch (error) {
        console.log(error);
    }
}
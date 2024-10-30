import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sakibul:222112009@cluster0.26aph.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
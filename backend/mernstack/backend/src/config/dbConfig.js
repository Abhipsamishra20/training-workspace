import mongoose from "mongoose";
//step 3
const connectDB = async() => {
    await mongoose.connect(`mongodb+srv://admin:admin@cloudfst.oyfjl9t.mongodb.net/fsd?retryWrites=true&w=majority&appName=cloudfst`)
}

export default connectDB
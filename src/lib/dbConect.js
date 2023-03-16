import mongoose from "mongoose";

const URI_MONGO = `mongodb+srv://movies-app:KBMGRuW1HdfvAtl4@cluster0.nbhqxkl.mongodb.net/movies-app`

const ConectarBD = async() => {
    try {
        await mongoose.connect(URI_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
        })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default ConectarBD
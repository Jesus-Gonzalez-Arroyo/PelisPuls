import mongoose from "mongoose";

const URI_MONGO = process.env.URL_DB

const ConectarBD = async () => {
    try {
        await mongoose.connect(URI_MONGO, {
            bufferCommands: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default ConectarBD
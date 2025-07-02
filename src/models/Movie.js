import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
    }, 
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    active: {
        type: String,
    }
})

export default mongoose.models.Movie || mongoose.model('Movie', movieSchema)

import mongoose, { Schema } from "mongoose"

const recipeSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    nonveg: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        default: null
    }
})

const Recipe=mongoose.models.recipe||mongoose.model("recipe",recipeSchema)

export default Recipe
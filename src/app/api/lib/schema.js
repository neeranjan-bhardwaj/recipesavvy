import mongoose, { Schema } from "mongoose"

const recipeSchema=new mongoose.Schema({
    name:String,
    ingredients:Array,
    instructions:Array,
    image:String,
    non_veg:Boolean
})

const Recipe=mongoose.models.recipe||mongoose.model("recipe",recipeSchema)

export default Recipe
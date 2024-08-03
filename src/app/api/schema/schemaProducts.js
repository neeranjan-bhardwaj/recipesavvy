import mongoose, { Schema } from "mongoose"

const productschema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    image: {
        type: String,
        default: null
    },
    fruit: {
        type: Boolean,
        required: true
    }
})

const Pooduts=mongoose.models.Pooduts||mongoose.model("Pooduts",productschema)

export default Pooduts

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CarSchema = new Schema({
    name: String,
    options: {
        aircondition: Boolean,
        navigation:Boolean,
        transmission: String,
        person:Number
    },
    image:String,
    price: Number
});

const CarModel = mongoose.model("car", CarSchema);

module.exports = CarModel;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DonationSchema = new Schema({
    date:{
        type:Date,
        default:Date.now(),
    },
    amount:{
        type:Number,
        require:true,
    },
    DonationNumber:{
        type:Number,
        require:true,
    },
})

module.exports = mongoose.model("donations",DonationSchema);

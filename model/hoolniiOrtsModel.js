const mongoose = require('mongoose');

const HoolniiOrtsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    hoolniiTses: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HoolniiTses",
    }
})

module.exports = mongoose.model("HoolniiOrts", HoolniiOrtsSchema);
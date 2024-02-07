const mongoose = require("mongoose")


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    batchId: {
        type: mongoose.Types.ObjectId, //custome datatype id cha ahe jo h aline tyar hoto
        required: true
    },
}, { timestamps: true })


module.exports = mongoose.model("student", studentSchema)
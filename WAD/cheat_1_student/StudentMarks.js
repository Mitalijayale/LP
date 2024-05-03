const mongoose = require("mongoose")

const StudentMarksSchema = new mongoose.Schema({
    // Name: String,
    // Roll_No: Number,
    // WAD_Marks: Number,
    // CC_Marks: Number,
    // DSBDA_Marks: Number,
    // CNS_Marks: Number,
    // AI_Marks: Number
    Name:{
        type:String
    },
    Roll_No:{
        type:Number
    },
    WAD_Marks:{
        type:Number
    },
    CC_Marks:{
        type:Number
    },
    DSBDA_Marks:{
        type:Number
    },
    CNS_Marks:{
        type:Number
    },
    AI_Marks:{
        type:Number
    }
})

// creating Model of defined schema `StudentMarksSchema` and then exporting
const StudentMarks = mongoose.model("student_marks", StudentMarksSchema);
module.exports = StudentMarks;
const { model, Schema } = require("mongoose");

//creating an exam that has a time limit, and a variable number of questions
const examSchema = new Schema({
    time: {
        type: Int32, required:true , default: 60
    },
    questions: [new  Schema({
        question: {type:String, required:true},
        answer: {type:String, default: "none"}
    },{strict: false})
    ]
},{strict: false});

module.exports = model("Exam", examSchema);
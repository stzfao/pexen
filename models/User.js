const { model, Schema } = require("mongoose");

const userSchema = new Schema({
    email_id: {
        type: String, required: true
    },
    test_taken: {
        type: Schema.Types.ObjectId,
        ref: "Exam",
        default: null
    },
    face_id: {
        type: String, required: true
    },
});

module.exports = model("User",userSchema);
const { model, Schema } = require("mongoose");

const instituteSchema = new Schema({
    email_id: {
        type: String, required: true
    },
    test_created: {
        type: Schema.Types.ObjectId,
        ref: "Exam",
        default: null
    },
});

module.exports = model("Institute",instituteSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        education: {
            type: String,
            required: true,
        },
        password: {
            type: String,
        },
        studyTime: {
            type: String,
        }
    }
);

module.exports = users = mongoose.model("users", userSchema);
const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: String,          // ✅ capital S
    description: String     // ✅ capital S
});

const noteModel = mongoose.model("note", noteSchema);

module.exports = noteModel;
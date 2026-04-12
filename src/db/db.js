const mongoose = require("mongoose")


async function connectDB() {
    await mongoose.connect("mongodb+srv://database-vala-part:dd8mea7Ah6RhBDAP@sou17.gepti3u.mongodb.net/halley")

    console.log(" connected to DB ")
}

module.exports = connectDB
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://mongotut:<password>@cluster0.avtw6dr.mongodb.net/techNotesDB?retryWrites=true&w=majority")
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB
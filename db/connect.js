const mongoose = require("mongoose");

// Atlas connection
mongoose.connect("mongodb+srv://aw573811_db_user:GC14t2QM2Twj1JGw@cluster0.ewnivk6.mongodb.net/students", {
    // optional options (Mongoose 6+ sets these by default)
}).then(() => {
    console.log('Connection to Atlas successful');
}).catch((e) => {
    console.log('Connection failed', e);
});
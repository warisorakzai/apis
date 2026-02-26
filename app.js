const express = require("express");
const student=require("./models/students");
const studentRouter=require("./routers/student");
const cors = require("cors");
const app = express();

require("./db/connect")
const port = process.env.PORT || 8000;
// middleware to read JSON body
app.use(cors());
app.use(express.json());
app.use(studentRouter);


// START SERVER (outside routes)
app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");

const port = 3000;
const authRoutes = require("./routes/auth");
const todoRoutes = require("./routes/todo") 

app.use(express.json());
app.use(cors());


app.use("/auth", authRoutes);
app.use("/todos", todoRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



//connect to mongoose
mongoose.connect("mongodb+srv://phooda938:phooda938@todo-app.3zh8laj.mongodb.net/")


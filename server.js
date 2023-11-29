const express = require("express");
const mongoose = require("mongoose");

const { User, FoodItem , Order}=require("./config/db")


const app = express();
app.use(express.json());


app.listen(5000,console.log(`Server running on 5000`));

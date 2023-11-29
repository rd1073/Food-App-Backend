const express = require("express");
const mongoose = require("mongoose");
const foodItemRoutes = require("./routes/foodItemRoutes")
const { User, FoodItem , Order}=require("./config/db")


const app = express();
app.use(express.json());


app.use("/api/food", foodItemRoutes);
 
app.listen(5000,console.log(`Server running on 5000`));

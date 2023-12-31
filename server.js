const express = require("express");
const mongoose = require("mongoose");
const foodItemRoutes = require("./routes/foodItemRoutes")
const { User, FoodItem , Order}=require("./config/db")
const userRoutes = require("./routes/userRoutes")
const orderRoutes = require("./routes/orderRoutes")


const app = express();
app.use(express.json());


app.use("/api/food", foodItemRoutes);
app.use("/api/user", userRoutes);
app.use("/api/order", orderRoutes);

 
app.listen(5000,console.log(`Server running on 5000`));

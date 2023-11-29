const mongoose = require("mongoose")

const conn = mongoose.createConnection('mongodb://0.0.0.0:27017/FoodApp');
conn.on('connected', () => {
  console.log('Mongoose connected mongodb');
});
conn.on('error', (err) => {
  console.error(`Mongoose connection error: ${err}`);
});


//users
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    // Add any other user-related fields here
  });
  
  const User = conn.model('User', userSchema);


  //food items
const foodItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
      },
  });
  const FoodItem = conn.model('FoodItem', foodItemSchema);


//orders
  const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem', required: true }],
    status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
    // Add any other fields relevant to orders
  });
  
  const Order = conn.model('Order', orderSchema);
  
  module.exports = { User, FoodItem, Order };



 
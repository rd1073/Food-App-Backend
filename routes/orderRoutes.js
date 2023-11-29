const express = require('express');
const { createOrder, getMyOrders} = require('../controllers/orderControllers'); // Adjust the import path
const protect = require('../config/protect'); // Assuming you have middleware for authentication


const router = express.Router();

// Route for creating a new order
router.post('/createorder', protect, createOrder);

// Route for getting all orders for the logged-in user
router.get('/myorders', protect, getMyOrders );

//router.get('/byuser', protect, getOrdersByLoggedInUser);


//delete an order

//get specific order of logged in user


module.exports = router;

const express = require('express');
const { createOrder, getMyOrders, deleteOrder, getSpecificOrder} = require('../controllers/orderControllers'); // Adjust the import path
const protect = require('../config/protect'); // Assuming you have middleware for authentication


const router = express.Router();

// Route for creating a new order
router.post('/createorder', protect, createOrder);

// Route for getting all orders for the logged-in user
router.get('/myorders', protect, getMyOrders );

//delete an order
router.delete('/:orderId', protect, deleteOrder );

//get specific order of logged in user
router.get('/:orderId', protect, getSpecificOrder);


module.exports = router;

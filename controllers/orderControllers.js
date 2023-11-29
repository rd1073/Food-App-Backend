const { Order, FoodItem } = require('../config/db');

// create an order
const createOrder = async (req, res) => {
  try {
    const { items } = req.body;
    const userId = req.user.id; // Assuming the user ID is available in req.user

     // Fetch the prices of the food items from the database
     const prices = await Promise.all(
        items.map(async (item) => {
          const foodItem = await FoodItem.findById(item.foodItem);
          return foodItem ? foodItem.price : 0;
        })
      );
  
      // Calculate the total amount based on the prices and quantities of the items
      const totalAmount = items.reduce((total, item, index) => {
        console.log(`Item: ${item.foodItem}, Quantity: ${item.quantity}`);
        console.log(`FoodItem Price: ${prices[index]}`);
        return total + prices[index] * item.quantity;
      }, 0);
  
      console.log('Calculated Total Amount:', totalAmount);


    const newOrder = new Order({
      user: userId,
      items,
      totalAmount,
    });

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// get all the orders of the logged in user
const getMyOrders = async (req, res) => {
    try {
      const userId = req.user.id; // Assuming the user ID is available in req.user
      const orders = await Order.find({ user: userId }).populate('items.foodItem', 'name description price');
  
      res.status(200).json(orders);
    } catch (error) {
      console.error('Error getting user orders:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


// delete an order
const deleteOrder = async (req, res) => {
    try {
      const userId = req.user.id; // Assuming the user ID is available in req.user
      const orderId = req.params.orderId;
  
      // Check if the order belongs to the logged-in user
      const order = await Order.findOne({ _id: orderId, user: userId });
  
      if (!order) {
        return res.status(404).json({ error: 'Order not found or does not belong to the user' });
      }
  
      await Order.deleteOne({ _id: orderId });
  
      res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
      console.error('Error deleting order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  // get a specific order
  const getSpecificOrder = async (req, res) => {
    try {
      const userId = req.user.id; // Assuming the user ID is available in req.user
      const orderId = req.params.orderId;
  
      // Check if the order belongs to the logged-in user
      const order = await Order.findOne({ _id: orderId, user: userId }).populate('items.foodItem', 'name price');
  
      if (!order) {
        return res.status(404).json({ error: 'Order not found or does not belong to the user' });
      }
  
      res.status(200).json(order);
    } catch (error) {
      console.error('Error getting single order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
module.exports = {createOrder, getMyOrders, deleteOrder, getSpecificOrder};

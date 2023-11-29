const { FoodItem, User }=require("../config/db")


//add new food iteam
const addFoodItem =  async(req,res)=>{
    try {
        const { name, description, price } = req.body;
        console.log("Request Body:", req.body);
        const addedBy = req.user.id;

        // Add any additional validation or processing here
        if (!name || !description || !price) {
            res.status(400).json({ error: "Please Enter all the Fields" });
            return;
          }
        const newFoodItem = new FoodItem({
          name,
          description,
          price,
          addedBy
        });

        newFoodItem.save().then(async(food) => {
            console.log("Food Item saved:", food);
            //newFoodItem.populate('addedBy', 'username');
            await newFoodItem
            .populate({
              path: 'addedBy',
              select: 'username',
            });
            res.status(201).json({
              _id: food._id,
              name: food.name,
              description: food.description,
              price: food.price,
              addedBy: {
                _id: food.addedBy._id,
                username: food.addedBy.username,
                
              },
            });
          });
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: "Server error probably" });
        }
    
         
};

//getting all the food iteam
 const getAllFoodItems = async (req, res) => {
  try {
    const foodItems = await FoodItem.find();

    res.status(200).json(foodItems);
  } catch (error) {
    console.error('Error getting all food items:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//get specific food iteam by id
const getFoodItemById = async (req, res) => {
    try {
      const foodItem = await FoodItem.findById(req.params.id);
  
      if (!foodItem) {
        return res.status(404).json({ error: 'Food item not found' });
      }
  
      res.status(200).json(foodItem);
    } catch (error) {
      console.error('Error getting food item by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  //get(search) the food iteam by its name
const getFoodItemByName = async (req, res) => {
    try {
      const { name } = req.params;
  
      const foodItem = await FoodItem.find({ name: new RegExp(name, 'i') });
  
      if (!foodItem || foodItem.length === 0) {
        return res.status(404).json({ error: 'Food item not found' });
      }
  
      res.status(200).json(foodItem);
    } catch (error) {
      console.error('Error getting food item by name:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

//update the food item
const updateFoodItem = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description, price } = req.body;
  
      // Check if any of the required fields are missing
      if (!name || !description || !price) {
        return res.status(400).json({ error: 'Please provide all required fields' });
      }
  
      const updatedFoodItem = await FoodItem.findByIdAndUpdate(
        id,
        { name, description, price },
        { new: true } // This option returns the modified document rather than the original
      );
  
      if (!updatedFoodItem) {
        return res.status(404).json({ error: 'Food item not found' });
      }
  
      res.status(200).json(updatedFoodItem);
    } catch (error) {
      console.error('Error updating food item by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  // delete food item
const deleteFoodItem = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedFoodItem = await FoodItem.findByIdAndDelete(id);
  
      if (!deletedFoodItem) {
        return res.status(404).json({ error: 'Food item not found' });
      }
  
      res.status(200).json({ message: 'Food item deleted successfully', deletedFoodItem });
    } catch (error) {
      console.error('Error deleting food item by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports = { addFoodItem, getAllFoodItems, getFoodItemById, getFoodItemByName, updateFoodItem, deleteFoodItem };
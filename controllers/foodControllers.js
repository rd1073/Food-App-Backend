const { FoodItem }=require("../config/db")


//add new food iteam
const addFoodItem =  async(req,res)=>{
    try {
        const { name, description, price } = req.body;
        console.log("Request Body:", req.body);

        // Add any additional validation or processing here
        if (!name || !description || !price) {
            res.status(400).json({ error: "Please Enter all the Fields" });
            return;
          }
        const newFoodItem = new FoodItem({
          name,
          description,
          price,
        });

        newFoodItem.save().then((food) => {
            console.log("Food Item saved:", food);
    
            res.status(201).json({
              _id: food._id,
              name: food.name,
              description: food.description,
              price: food.price,
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




module.exports = { addFoodItem, getAllFoodItems, getFoodItemById };
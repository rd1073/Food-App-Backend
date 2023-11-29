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





module.exports = { addFoodItem };
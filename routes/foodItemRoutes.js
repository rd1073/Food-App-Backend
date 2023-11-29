const express = require("express")
const { addFoodItem, getAllFoodItems, getFoodItemById, getFoodItemByName } =require("../controllers/foodControllers")
const router=express.Router();
 
//add new food iteam
router.route('/addfood').post(addFoodItem);


// show all the food items
router.route('/showall').get(getAllFoodItems);

//get a specific food iteam (by its id)
router.route('/:id').get(getFoodItemById);

//get(search) a specific food item by its name
router.route('/search/:name').get(getFoodItemByName);


//update a food item
router.route('/:id').put();

//delete a food itea
router.route('/:id').delete();


module.exports=router;
 
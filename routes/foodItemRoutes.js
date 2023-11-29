const express = require("express")
const { addFoodItem, getAllFoodItems, getFoodItemById, getFoodItemByName, updateFoodItem, deleteFoodItem } =require("../controllers/foodControllers")
const protect = require("../config/protect") 
const router=express.Router();


//add new food iteam
router.route('/addfood').post(protect, addFoodItem);


// show all the food items
router.route('/showall').get(getAllFoodItems);

//get a specific food iteam (by its id)
router.route('/:id').get(getFoodItemById);

//get(search) a specific food item by its name
router.route('/search/:name').get(getFoodItemByName);


//update a food item
router.route('/:id').put(updateFoodItem);

//delete a food itea
router.route('/:id').delete(deleteFoodItem);


module.exports=router;
 
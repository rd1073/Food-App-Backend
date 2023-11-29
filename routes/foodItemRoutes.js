const express = require("express")
const { addFoodItem, getAllFoodItems, getFoodItemById } =require("../controllers/foodControllers")
const router=express.Router();
 
//add new food iteam
router.route('/addfood').post(addFoodItem);


// show all the food items
router.route('/showall').get(getAllFoodItems);

//get a specific food iteam
router.route('/:id').get(getFoodItemById);

//update a food item
router.route('/:id').put();

//delete a food itea
router.route('/:id').delete();


module.exports=router;
 
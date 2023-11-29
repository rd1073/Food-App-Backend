const express = require("express")
const { addFoodItem, getAllFoodItems, getFoodItemById, getFoodItemByName, updateFoodItem, deleteFoodItem, getFoodItemsByUser, getMyFoodItems } =require("../controllers/foodControllers")
const protect = require("../config/protect") 
const router=express.Router();


//add new food iteam
router.route('/addfood').post(protect, addFoodItem);


// show all the food items
router.route('/showall').get(getAllFoodItems);

//show all food items added by a particular user
router.route('/showall/:username').get(getFoodItemsByUser);

//show all food iteam of the logged in user
router.get('/showmine', protect, getMyFoodItems);


//get a specific food iteam (by its id)
router.route('/:id').get(getFoodItemById);

//get(search) a specific food item by its name
router.route('/search/:name').get(getFoodItemByName);


//update a food item
router.route('/:id').put(updateFoodItem);

//delete a food itea
router.route('/:id').delete(deleteFoodItem);


module.exports=router;
 
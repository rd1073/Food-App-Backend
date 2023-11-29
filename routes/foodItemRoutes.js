const express = require("express")
const { addFoodItem } =require("../controllers/foodControllers")
const router=express.Router();
console.log(typeof addFoodItem);

//add new food iteam
router.route('/addfood').post(addFoodItem);


// show all the food items
router.route('/showall').get();

//get a specific food iteam
router.route('/:id').get();

//update a food item
router.route('/:id').put();

//delete a food itea
router.route('/:id').delete();


module.exports=router;
 
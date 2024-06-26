import express from "express";

import {
  getAllUsers,
  addUser,
  getUser,
  getUserRecipes,
  getUserMealPlan,
  getMealPlanById,
  updateMealPlan,
  // deleteMeal,
  addRecipeToDate,
} from "../controllers/userController";

const router = express.Router();

router.route("/").get(getAllUsers).post(addUser);

router.route("/:id").get(getUser);

router.route("/:id/recipes").get(getUserRecipes);

// router.route("/:id/mealplan").get(getUserMealPlan);

// router.route("/:id/mealplan/addrecipe").post(addRecipeToDate);

// router.route("/:id/mealplan/:id").get(getMealPlanById).put(updateMealPlan);

export default router;

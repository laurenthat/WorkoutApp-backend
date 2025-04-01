import { Router } from "express";
import { WorkoutController } from "../controllers/workoutController";

const router = Router();
// Create a new workout
router.post("/workouts", WorkoutController.createWorkout);

// Get all workouts
router.get("/workouts", WorkoutController.getAllWorkouts);

// Get a workout by ID
router.get("/workouts/:id", WorkoutController.getWorkoutById);

// Update a workout by ID
router.put("/workouts/:id", WorkoutController.updateWorkout);

// Delete a workout by ID
router.delete("/workouts/:id", WorkoutController.deleteWorkout);

export default router;

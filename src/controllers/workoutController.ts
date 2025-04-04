import { WorkoutModel } from "./../models/workoutModel";
import { Request, Response } from "express";

export const WorkoutController = {
  // Creates a new workout
  async createWorkout(req: Request, res: Response) {
    try {
      const workout = await WorkoutModel.create(req.body);
      res.status(201).json(workout);
    } catch (error) {
      res.status(500).json({ error: "No workout created" });
    }
  },

  // Retrieves all workouts
  async getAllWorkouts(req: Request, res: Response) {
    try {
      const workouts = await WorkoutModel.getAll();
      res.status(200).json(workouts);
    } catch (error) {
      res.status(500).json({ error: "No workouts found" });
    }
  },

  // Retrieves a workout by ID
  async getWorkoutById(req: Request, res: Response) {
    try {
      const workout = await WorkoutModel.getById(parseInt(req.params.id));
      if (!workout) {
        res.status(404).json({ error: "Workout not found" });
        return;
      }
      res.json(workout);
    } catch (error) {
      res.status(500).json({ error: "Error fetching workout" });
    }
  },

  //Updates a workout by ID
  async updateWorkout(req: Request, res: Response) {
    try {
      const workout = await WorkoutModel.update(
        parseInt(req.params.id),
        req.body
      );
      if (!workout) {
        res.status(404).json({ error: "Workout not found" });
        return;
      }
      res.status(200).json(workout);
    } catch (error) {
      res.status(500).json({ error: "No workout updated" });
    }
  },

  // Deletes a workout by ID
  async deleteWorkout(req: Request, res: Response) {
    try {
      const workout = await WorkoutModel.delete(parseInt(req.params.id));
      if (!workout) {
        res.status(404).json({ error: "Workout not found" });
        return;
      }
      res.status(200).json(workout);
    } catch (error) {
      res.status(500).json({ error: "No workout deleted" });
    }
  },
};

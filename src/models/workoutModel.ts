import { Workout } from "./../types/workoutTypes";
import pool from "../config/db";

//WorkoutModel handles the database operations for workouts
export const WorkoutModel = {
  async create(workout: Workout) {
    const { exercise, sets, reps, weight } = workout;
    const query = `
            INSERT INTO workouts (exercise, sets, reps, weight)
            VALUES ($1, $2, $3, $4) RETURNING *
        `;
    const values = [exercise, sets, reps, weight];
    const result = await pool.query(query, values);
    return result.rows[0];
  },

  // Gets all workouts from the database
  async getAll() {
    const query = `SELECT * FROM workouts ORDER BY created_at DESC`;
    const result = await pool.query(query);
    return result.rows;
  },

  // Gets a workout by ID
  async getById(id: number) {
    const query = `SELECT * FROM workouts WHERE id = $1`;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  },

  // Updates a workout by ID
  async update(id: number, workout: Workout) {
    const { exercise, sets, reps, weight } = workout;
    const query = `UPDATE workouts SET exercise = $1, sets = $2, reps = $3, weight = $4 WHERE id = $5 RETURNING *`;
    const values = [exercise, sets, reps, weight, id];
    const result = await pool.query(query, values);
    return result.rows[0];
  },

  // Deletes a workout by ID
  async delete(id: number) {
    const query = `DELETE FROM workouts WHERE id = $1 RETURNING *`;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  },
};

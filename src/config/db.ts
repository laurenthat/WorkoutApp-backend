import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

// Initial pool for database creation
const initialPool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
});

const initializeDatabase = async (): Promise<void> => {
  try {
    // Check if database exists
    const dbExistsQuery = `
      SELECT FROM pg_database WHERE datname = $1
    `;

    const dbExists = await initialPool.query(dbExistsQuery, [
      process.env.DB_NAME,
    ]);

    if (dbExists.rowCount === 0) {
      console.log(`Creating database: ${process.env.DB_NAME}`);
      await initialPool.query(`CREATE DATABASE ${process.env.DB_NAME}`);
    }

    await initialPool.end();
  } catch (error) {
    console.error("Database creation error:", error);
    process.exit(1);
  }
};

// Pool for general database operations
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  database: process.env.DB_NAME,
});

const initializeTable = async (): Promise<void> => {
  try {
    // Create workouts table if it doesn't exist
    await pool.query(`
      CREATE TABLE IF NOT EXISTS workouts (
        id SERIAL PRIMARY KEY,
        exercise VARCHAR(100) NOT NULL,
        sets INTEGER NOT NULL,
        reps INTEGER NOT NULL,
        weight DECIMAL(5,2),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("Table initialization completed");
  } catch (error) {
    console.error("Table initialization error:", error);
    process.exit(1);
  }
};

export { pool as default, initializeDatabase, initializeTable };

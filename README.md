# WorkoutApp Backend

A RESTful API backend for tracking workouts built with Node.js, Express, TypeScript, and PostgreSQL.

## Features

- CRUD operations for workouts (Create, Read, Update, Delete)
- PostgreSQL database integration
- TypeScript
- RESTful API design
- Works in connection with the [WorkoutApp frontend repository](https://github.com/laurenthat/WorkoutApp-frontend)

## Prerequisites

- Node.js
- PostgreSQL
- npm

## Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd WorkoutApp-backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a PostgreSQL database:

```sql
CREATE DATABASE workout_app;
```

4. Create the workouts table:

```sql
CREATE TABLE workouts (
    id SERIAL PRIMARY KEY,
    exercise VARCHAR(100) NOT NULL,
    sets INTEGER NOT NULL,
    reps INTEGER NOT NULL,
    weight DECIMAL(5,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

5. Create `.env` file and configure your environment variables:

```env
PORT=3000
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=workout_app
```

## Running the Application

Development mode:

```bash
npm run dev
```

Production build:

```bash
npm run build
npm start
```

## API Endpoints

### Workouts

| Method | Endpoint            | Description            |
| ------ | ------------------- | ---------------------- |
| GET    | `/api/workouts`     | Get all workouts       |
| GET    | `/api/workouts/:id` | Get a specific workout |
| POST   | `/api/workouts`     | Create a new workout   |
| PUT    | `/api/workouts/:id` | Update a workout       |
| DELETE | `/api/workouts/:id` | Delete a workout       |

### Request Body Example (POST/PUT)

```json
{
  "exercise": "Bench Press",
  "sets": 3,
  "reps": 10,
  "weight": 135
}
```

## Project Structure

```
WorkoutApp-backend/
├── src/
│   ├── config/
│   │   └── database.ts
│   ├── controllers/
│   │   └── workoutController.ts
│   ├── models/
│   │   └── workoutModel.ts
│   ├── routes/
│   │   └── workoutRoutes.ts
│   ├── types/
│   │   └── workoutTypes.ts
│   └── app.ts
├── .env
├── package.json
└── tsconfig.json
```

## Scripts

- `npm run dev`: Start development server with hot reload
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm test`: Run tests

## Technologies

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- cors
- dotenv

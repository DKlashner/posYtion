// Import the 'pg' module to interact with PostgreSQL
const { Pool } = require('pg');
require('dotenv').config(); // Load environment variables

// Create a new PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER || 'postgres', // Change if your user is different
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'posytion_db',
  password: process.env.DB_PASSWORD || '', // Replace with your password
  port: process.env.DB_PORT || 5432, // Default PostgreSQL port
});

// Test the database connection
pool.connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch(err => console.error("❌ Database connection error", err));

module.exports = pool;

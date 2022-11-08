const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./database/Database");

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server for Handling uncaught Exception`);
});

// Connecting the configuration file in /config
dotenv.config({
  path: "backend/config/.env",
});

// Calling the Database connection
connectDatabase();

// Creating the server
const server = app.listen(process.env.PORT, () => {
  console.log(`Serve is working on http://localhost:${process.env.PORT}`);
});

// For the Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`);
  console.log(`Shutting down the server due to an Unhandled Promise Rejection`);
  server.close(() => {
    process.exit(1);
  });
});

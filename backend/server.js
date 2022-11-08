const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./database/Database");

//Connecting the configuration file in /config
dotenv.config({
  path: "backend/config/.env",
});

//Calling the Database connection
connectDatabase();

//Creating the server
const server = app.listen(process.env.PORT, () => {
  console.log(`Serve is working on http://localhost:${process.env.PORT}`);
});

require("dotenv").config();
const fs = require("fs");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
  dialectOptions: {
    ssl: false,
  },
});

sequelize
  .authenticate()
  .then(() => console.log("✅ Connected to the database"))
  .catch((err) => console.error("❌ Error connecting to the database:", err));

module.exports = sequelize;

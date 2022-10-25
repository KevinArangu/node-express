require('dotenv').config();

const SERVER_MODE = process.env.NODE_ENV
const WHITELIST = ["http://localhost:3000"];
const options = SERVER_MODE === "production" ?
  {
    origin: (origin, callback) => {
      if (WHITELIST.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("not permited"))
      }
    }
  }
  : undefined;

module.exports = options;

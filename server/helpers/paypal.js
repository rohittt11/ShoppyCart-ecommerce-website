const paypal = require("paypal-rest-sdk");
const dotenv = require("dotenv");
dotenv.config();

paypal.configure({
  mode: "sandbox",
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
});

module.exports = paypal;

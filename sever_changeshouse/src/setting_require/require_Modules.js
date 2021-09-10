var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var md5 = require("md5");
var moment = require("moment");
const fetch = require('node-fetch');
const redis = require("redis");

const client = redis.createClient();
client.on("error", (err) => {
  console.log(err);
});

client.on("connect", (err) => {
  console.log("redis connected");
});


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cuc08386_changeshop",
});

module.exports = { router, con, md5, moment,fetch,client };

var express = require("express");
var cors = require("cors");
var app = express();
var server = require("http").createServer(app);
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



server.listen(process.env.PORT||8080, () => {
  console.log(`Server running at`);
});

// Import API

const initAPIs = require("./src/routes/api");
initAPIs(app);



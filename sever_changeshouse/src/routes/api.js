const express = require("express");
const router = express.Router();
//import form admin
const AuthMiddleWare = require("../middleware/AuthMiddleware");
const AuthController = require("../controllers/Admin/AuthController");
const FriendController = require("../controllers/Admin/FriendController");
const DeleteTokenController = require("../controllers/Admin/DeleteTokenController");

// import from customer
const Home = require("../controllers/Customer/home");
const Account = require("../controllers/Customer/account");
const Cart = require("../controllers/Customer/cart");
const Sales_invoice = require("../controllers/Customer/sales_invoice");
const Location = require("../controllers/Customer/location");
const Product = require("../controllers/Customer/product");

let initAPIs = (app) => {

  // api config for customer
  router.use("/Home", Home);
  router.use("/Account", Account);
  router.use("/Cart", Cart);
  router.use("/Sales_Invoice", Sales_invoice);
  router.use("/Location", Location);
  router.use("/Product", Product);
  // end

  //check middleware for page admin.
  router.post("/login", AuthController.login);
  router.post("/refresh-token", AuthController.refreshToken);
  router.use(AuthMiddleWare.isAuth);
  router.get("/friends", FriendController.friendLists);
  router.post("/logout", DeleteTokenController.deteletoken);
  router.get("/check_authetication", AuthController.check_authetication);
  //end


  return app.use("/", router);
}

module.exports = initAPIs;
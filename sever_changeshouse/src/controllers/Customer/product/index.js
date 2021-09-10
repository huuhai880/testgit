var { router } = require("../../../setting_require/require_Modules");

var srcFillterProduct = require("./src/fillter");
var srcGetFillterProduct = require("./src/get_product_fillter");
var srcGetProductSearch = require("./src/get_product_search");
var srcGetGroupPortfolio = require("./src/get_group_portfolio");
var srcGetProductPortfolio = require("./src/get_product_portfolio");
var srcAddFavouristProduct = require("./src/add_product_favourist");




router.post("/FillterProduct", srcFillterProduct.FillterProduct);
router.post("/GetFillterProduct", srcGetFillterProduct.GetFillterProduct);
router.post("/GetProductSearch", srcGetProductSearch.GetProductSearch);
router.post("/GroupPortfolio", srcGetGroupPortfolio.GetGroupPortfolio);
router.post("/GetProductPortfolio", srcGetProductPortfolio.GetProductPortfolio);
router.post("/AddFavouristProduct", srcAddFavouristProduct.AddFavouristProduct);





module.exports = router;

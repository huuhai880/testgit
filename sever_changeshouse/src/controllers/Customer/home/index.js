var { router } = require("../../../setting_require/require_Modules");

var srcGetTopProduct = require("./src/get_top_product");
var srcGetOfferProduct = require("./src/get_offer_product");
var srcGetBigSale = require("./src/get_big_sale");
var srcGetAllProduct = require("./src/get_all_product");
var srcGetSlider = require("./src/get_content_slider");
var srcGetSalePrice = require("./src/get_sale_price");
var srGetColorProduct = require("./src/get_color_product");

router.post("/GetTopProduct", srcGetTopProduct.GetTopProduct);
router.post("/GetOfferProduct", srcGetOfferProduct.GetOfferProduct);
router.post("/GetBigSale", srcGetBigSale.GetBigSale);
router.post("/GetAllProduct", srcGetAllProduct.GetAllProduct);
router.post("/GetSlider", srcGetSlider.GetContentSlider);
router.post("/GetSalePrice", srcGetSalePrice.GetSalePrice);
router.post("/GetColorProduct", srGetColorProduct.GetColorProduct);
router.post("/GetSortPriceProduct", srcGetAllProduct.GetSortPriceProduct);

module.exports = router;

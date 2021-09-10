var { router } = require("../../../setting_require/require_Modules");

var srcAddToCart = require("./src/add_to_cart");
var srcUpdateCount = require("./src/update_count_item");
var srcDeleteItemCart = require("./src/delete_item_cart");
var srcGetDataCart = require("./src/get_data_cart");

router.post("/AddToCart", srcAddToCart.AddToCart);
router.post("/UpdateCount", srcUpdateCount.UpdateCount);
router.post("/DeleteItemCart", srcDeleteItemCart.DeleteItemCart);
router.post("/GetDataCart", srcGetDataCart.GetDataCart);


module.exports = router;

var { router } = require("../../../setting_require/require_Modules");

var srcAddNewSalesInvoice = require("./src/add_new_sales_invoice");
var srcGetSalesInvoice = require("./src/get_sales_invoice");
var srcGetDetailSalesInvoice = require("./src/get_detail_sales");

router.post("/AddNewSalesInvoice", srcAddNewSalesInvoice.AddNewSalesInvoice);
router.post("/GetSalesInvoice", srcGetSalesInvoice.GetSalesInvoice);
router.post("/GetDetailSalesInvoice", srcGetDetailSalesInvoice.GetDetailSalesInvoice);


module.exports = router;

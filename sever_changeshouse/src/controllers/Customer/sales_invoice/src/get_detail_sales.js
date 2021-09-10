var { con } = require("../../../../setting_require/require_Modules");

const GetDetailSalesInvoice = (req, res) => {
    const id_sales_invoice = req.body.id_sales_invoice;

    con.connect(function (err) {
        var sql = "SELECT * FROM `sales_invoice`,`detail_sales_invoice`,`location_user` " +
            " WHERE `sales_invoice`.`id_sales_invoice`=`detail_sales_invoice`.`id_sales_invoice` " +
            " AND `sales_invoice`.`id_location`=`location_user`.`id_location` " +
            " AND `sales_invoice`.`id_sales_invoice`='" + id_sales_invoice + "';";
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    });
};

module.exports = {
    GetDetailSalesInvoice,
};

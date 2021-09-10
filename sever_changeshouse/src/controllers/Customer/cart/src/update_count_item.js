var { con } = require("../../../../setting_require/require_Modules");

const UpdateCount = (req, res) => {
    const price_sale = req.body.price_sale;
    const count_product = req.body.count_product;
    const total_price_product = req.body.total_price_product;
    const id_detail_cart = req.body.id_detail_cart;
    con.connect(function (err) {
        var sql = "UPDATE `detail_cart_product`" +
            " SET `price_sale` = '"+price_sale+"'," +
            " `count_product` = '"+count_product+"'," +
            " `total_price` = '"+total_price_product+"' " +
            " WHERE `detail_cart_product`.`id_detail_cart` = '"+id_detail_cart+"';";
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.send("success");
        });
    });
};

module.exports = {
    UpdateCount,
};

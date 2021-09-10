var { con } = require("../../../../setting_require/require_Modules");
const async = require('async');
const GetBigSale = (req, res) => {
    const limit = req.body.limit;
    con.connect(function (err_connect) {
        var sql = "SELECT * FROM `product` WHERE `product`.`percent_sale`>=5 GROUP BY `product`.`percent_sale` DESC  LIMIT "+limit+"";
        con.query(sql, function (err, result) {
            if (err) throw err;
            let new_result = [];
                async.forEachOf(result, function (item, key, callback) {
                    let sql_price = "SELECT * FROM `sell_price_product` WHERE `sell_price_product`.`id_product`='" + item.id_product + "'";
                    con.query(sql_price, function (err_price, result_price) {
                        if (err_price) throw err_price;
                        new_result.push({ data_product: item, sell_price: result_price });
                        callback();
                    })
                }, () => {
                    res.json(new_result);
                })
        }
        );
    });
};



module.exports = {
    GetBigSale,
};

var { con } = require("../../../../setting_require/require_Modules");
const async = require('async');
const GetSalePrice = (req, res) => {

  const id_product = req.body.id_product;

  con.connect(function (err) {
    var sql = "SELECT p.id_sell_price,p.start_count_product,p.end_count_product,p.price_sell_product  FROM `sell_price_product` as p WHERE p.`id_product`='" + id_product + "'";
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
  GetSalePrice,
};

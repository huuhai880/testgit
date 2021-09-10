var { con } = require("../../../../setting_require/require_Modules");
var async = require('async');
const GetAllProduct = (req, res) => {
  const limit =req.body.limit;
    const page =req.body.page;
	const offset = (page - 1) * limit;
  con.connect(function (err_connect) {
    con.query(
      "SELECT * FROM `product`  LIMIT "+limit+" OFFSET "+offset+"",
      function (err, result) {
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

const GetSortPriceProduct = (req, res) => {
    const limit =req.body.limit;
    const page =req.body.page;
	const sort =req.body.sort;
	const offset = (page - 1) * limit;
    con.connect(function (err_connect) {
	const sql ="SELECT * FROM `product` ORDER BY `product`.`price_product` "+sort+" LIMIT "+limit+" OFFSET "+offset+"";
     con.query(sql,function (err, result) {
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
  GetAllProduct,
  GetSortPriceProduct
};

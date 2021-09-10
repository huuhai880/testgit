var { con, client } = require("../../setting_require/require_Modules");
const async = require('async');


let friendLists = (req, res) => {
  const limit = req.body.limit;
  try {
    client.get("TopProduct_test", (err, reply) => {
      if (reply === null) {
        con.connect(function (err) {
          con.query(
            "SELECT * FROM `product` ORDER BY RAND() LIMIT 10",
            function (err_query, result) {
              if (err_query) throw err_query;
              let new_result = [];
              async.forEachOf(result, function (item, key, callback) {
                let sql_price = "SELECT * FROM `sell_price_product` WHERE `sell_price_product`.`id_product`='" + item.id_product + "'";
                con.query(sql_price, function (err_price, result_price) {
                  if (err_price) throw err_price;
                  new_result.push({ data_product: item, sell_price: result_price });
                  callback();
                })
              }, () => {
                client.set("TopProduct_test", JSON.stringify(new_result));
                return res.status(200).json(new_result);
              })
            }
          );
        });

      } else {
        res.status(200).json(JSON.parse(reply));
      }
    })
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {
  friendLists: friendLists,
};
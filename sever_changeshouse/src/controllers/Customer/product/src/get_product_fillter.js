var { con } = require("../../../../setting_require/require_Modules");
const async = require('async');
const GetFillterProduct = (req, res) => {
    
    const limit =req.body.limit;
    const id_product_portfolio =req.body.id_product_portfolio;
	
    con.connect(function (err) {
		let sql="SELECT * FROM `product` WHERE `product`.`id_product_portfolio`='"+id_product_portfolio+"' LIMIT "+limit+" OFFSET 0";
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
  GetFillterProduct,
};

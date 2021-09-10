var { con } = require("../../../../setting_require/require_Modules");
const async = require('async');
const GetProductSearch = (req, res) => {
    
    const limit =req.body.limit;
    const name_product =req.body.name_product;
	const page =req.body.page;
	const offset =(page-1)*limit;
	
    con.connect(function (err) {
		let sql="SELECT * FROM `product` WHERE `product`.`name_product` LIKE '%"+name_product+"%'   LIMIT "+limit+" OFFSET "+offset+"";
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
  GetProductSearch,
};

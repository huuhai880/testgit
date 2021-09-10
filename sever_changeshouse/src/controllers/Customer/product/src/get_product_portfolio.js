var { con } = require("../../../../setting_require/require_Modules");
const async = require('async');
const GetProductPortfolio = (req, res) => {
    
	const page =req.body.page;
    const limit =req.body.limit;
    const id_group_portfolio =req.body.id_group_portfolio;
	const offset =(page-1)*limit;
    con.connect(function (err) {
		let sql="SELECT * FROM `product_portfolio`,`group_portfolio`,`product` WHERE `product_portfolio`.`id_group_portfolio`=`group_portfolio`.`id_group_portfolio` AND `product`.`id_product_portfolio`=`product_portfolio`.`id_product_portfolio` AND `group_portfolio`.`id_group_portfolio`='"+id_group_portfolio+"' LIMIT "+limit+" OFFSET "+offset+"";
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
// get long sort price product 
const GetSortProductPortfolio = (req, res) => {
	const page =req.body.page;
    const limit =req.body.limit;
    const id_group_portfolio =req.body.id_group_portfolio;
	const sort =req.body.sort;
	const offset =(page-1)*limit;
    con.connect(function (err) {
		let sql="SELECT * FROM `product_portfolio`,`group_portfolio`,`product` WHERE `product_portfolio`.`id_group_portfolio`=`group_portfolio`.`id_group_portfolio` AND `product`.`id_product_portfolio`=`product_portfolio`.`id_product_portfolio` AND `group_portfolio`.`id_group_portfolio`='"+id_group_portfolio+"' ORDER BY `product`.`price_product` "+sort+" LIMIT "+limit+" OFFSET "+offset+"";
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
  GetProductPortfolio,
  GetSortProductPortfolio
};

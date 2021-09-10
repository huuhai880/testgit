var { con } = require("../../../../setting_require/require_Modules");

const GetSalesInvoice = (req, res) => {
    const user_name =req.body.user_name;
    const status =req.body.status;
	
	
    con.connect(function (err) {
		var sql="SELECT * FROM `sales_invoice`,`location_user` WHERE `sales_invoice`.`user_name`='"+user_name+"' AND `sales_invoice`.`status`='"+status+"' AND `location_user`.`id_location`=`sales_invoice`.`id_location` GROUP BY `sales_invoice`.`date_create` DESC LIMIT 10 OFFSET 0";
     con.query(sql,function (err, result) {
         if (err) throw err;
         res.json(result);
       }
     );
   });
};

module.exports = {
  GetSalesInvoice,
};

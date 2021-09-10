var { con } = require("../../../../setting_require/require_Modules");
const async = require('async');
const AddFavouristProduct = (req, res) => {
    
    const limit =req.body.limit;
    const name_product =req.body.name_product;
	const page =req.body.page;
	const offset =(page-1)*limit;
	
    con.connect(function (err) {
		let sql="";
     con.query(sql,function (err, result) {
         if (err) throw err;
         res.send('success');
       }
     );
   });
};

module.exports = {
  AddFavouristProduct,
};

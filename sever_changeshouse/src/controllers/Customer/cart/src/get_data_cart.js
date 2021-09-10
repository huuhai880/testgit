var { con } = require("../../../../setting_require/require_Modules");

const GetDataCart = (req, res) => {
	const user_name = req.body.user_name;
    con.connect(function (err) {
        var sql = "SELECT * FROM `cart_product`,`detail_cart_product` WHERE `cart_product`.`id_cart`=`detail_cart_product`.`id_cart` AND `cart_product`.`user_name`='"+user_name+"'";
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    });
};

module.exports = {
    GetDataCart,
};

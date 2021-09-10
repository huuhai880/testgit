var { con } = require("../../../../setting_require/require_Modules");

const DeleteItemCart = (req, res) => {
	const id_detail_cart = req.body.id_detail_cart;
    con.connect(function (err) {
        var sql = "DELETE FROM `detail_cart_product` WHERE `detail_cart_product`.`id_detail_cart` = '"+id_detail_cart+"'";
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.send("success");
        });
    });
};

module.exports = {
    DeleteItemCart,
};

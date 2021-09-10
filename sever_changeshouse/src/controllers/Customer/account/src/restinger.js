var { con, md5 } = require("../../../../setting_require/require_Modules");

const Restinger = (req, res) => {
    const number_phone = req.body.number_phone;
    var password = req.body.password;
    const name = req.body.name;
    password = md5(password + "@changeshop");
    con.connect(function (err) {
        var sql = "INSERT INTO `account` (`user_name`, `password`, `name`, `number_phone`) VALUES ('" + number_phone + "', '" + password + "', '" + name + "', '" + number_phone + "');";
        var check_number_phone = "SELECT * FROM `account` WHERE `account`.`number_phone`='" + number_phone + "'"
        con.query(check_number_phone, function (err_check, result_check) {
            if (err_check) throw err_check;
            if (result_check.length == 0) {
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    var sql_add_cart = "INSERT INTO `cart_product` (`id_cart`, `user_name`, `total_price_cart`, `enable`) VALUES ('Cart_"+number_phone+"', '"+number_phone+"', '0', '0');";
                    con.query(sql_add_cart, function (err_cart, result_cart) {
                        if (err_cart) throw err_cart;
                        res.send("success");
                    });
                });
            } else {
                res.send("account_exit");
            }
        });
    });
};

module.exports = {
    Restinger,
};

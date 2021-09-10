var { con, md5 } = require("../../../../setting_require/require_Modules");

const ChangePassword = (req, res) => {
    const user_name = req.body.user_name;
    let password = req.body.password;
    let newpassword = req.body.newpassword;
    password = md5(password + "@changeshop");
    newpassword = md5(newpassword + "@changeshop");

    con.connect(function (err) {
        var check_number_phone = "SELECT * FROM `account` WHERE `account`.`user_name`='" + user_name + "'";
        con.query(check_number_phone, function (err_check, result_check) {
            if (err_check) throw err_check;
            if (password != result_check[0].password) {
                res.send("password_error");
            } else {
                var sql = "UPDATE `account` SET `password` = '"+newpassword+"' WHERE `account`.`user_name` = '"+user_name+"';";
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    res.send("success");
                });
            }
        });
    });
};

module.exports = {
    ChangePassword,
};

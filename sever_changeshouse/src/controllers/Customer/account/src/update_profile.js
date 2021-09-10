var { con, md5 } = require("../../../../setting_require/require_Modules");

const UpdateProfile = (req, res) => {
    const user_name = req.body.user_name;
    const name = req.body.name;
    const number_phone = req.body.number_phone;
    const birth_date = req.body.birth_date;
    const image_user = req.body.image_user;
    const sex = req.body.sex;
    con.connect((err_connect) => {
        var sql_check_phone = "SELECT * FROM `account` WHERE `account`.`number_phone`='"+number_phone+"';";
        con.query(sql_check_phone, (err_check, result_check) => {
            if (err_check) throw err_check;

            if (result_check.length > 0  && result_check[0].user_name != user_name) {
                res.send('phone_number_exists')
            } else {
                var sql = "UPDATE `account` SET `name` = '" + name + "', `number_phone` = '" + number_phone + "', `image_user` = '" + image_user + "', `birth_date` = '" + birth_date + "', `sex` = '" + sex + "' WHERE `account`.`user_name` = '" + user_name + "';";
                con.query(sql, (err, result) => {
                    if (err) throw err;
                    res.send('success')
                });
            }
        });
    });
};

module.exports = {
    UpdateProfile,
};

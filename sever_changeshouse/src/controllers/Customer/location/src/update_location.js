var { con } = require("../../../../setting_require/require_Modules");

const UpdateLocation = (req, res) => {
    const id_location = req.body.id_location;
    const name = req.body.name;
    const address_user = req.body.address_user;
    const ward = req.body.ward;
    const districts = req.body.districts;
    const provinces = req.body.provinces;
    const code_provinces = req.body.code_provinces;
    const phone_number = req.body.phone_number;
    const default_location = req.body.default_location;
    const user_name = req.body.user_name;
    con.connect(function (err_connect) {
        if (default_location === 1) {
            const sql_update = "UPDATE `location_user` SET `default_location` = '0' WHERE `location_user`.`user_name` = '" + user_name + "';"
            con.query(sql_update, function (err_update, result_update) {
                if (err_update) throw err_update;
                var sql = "UPDATE `location_user` SET " +
                    " `name` = '" + name + "'," +
                    " `address_user` = '" + address_user + "'," +
                    " `ward` = '" + ward + "'," +
                    " `districts` = '" + districts + "'," +
                    " `provinces` = '" + provinces + "'," +
                    " `code_provinces` = '" + code_provinces + "'," +
                    "  `phone_number` = '" + phone_number + "'," +
                    " `default_location` = '" + default_location + "' " +
                    " WHERE `location_user`.`id_location` = '" + id_location + "';";
                con.query(sql, function (err2, result2) {
                    if (err2) throw err2;
                    res.send("success");
                });
            });
        } else {
            var sql = "UPDATE `location_user` SET " +
                " `name` = '" + name + "'," +
                " `address_user` = '" + address_user + "'," +
                " `ward` = '" + ward + "'," +
                " `districts` = '" + districts + "'," +
                " `provinces` = '" + provinces + "'," +
                " `code_provinces` = '" + code_provinces + "'," +
                "  `phone_number` = '" + phone_number + "'," +
                " `default_location` = '" + default_location + "' " +
                " WHERE `location_user`.`id_location` = '" + id_location + "';";
            con.query(sql, function (err, result) {
                if (err) throw err;
                res.send("success");
            });
        }
    });
};

module.exports = {
    UpdateLocation,
};

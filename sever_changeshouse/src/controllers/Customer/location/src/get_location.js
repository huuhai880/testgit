var { con } = require("../../../../setting_require/require_Modules");

const GetLocation = (req, res) => {
    const user_name = req.body.user_name;

    con.connect(function (err) {
       var sql = "SELECT * FROM `location_user` WHERE `user_name`='"+user_name+"' ORDER BY `location_user`.`default_location` DESC LIMIT 7 OFFSET 0";
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    });
};

module.exports = {
    GetLocation,
};

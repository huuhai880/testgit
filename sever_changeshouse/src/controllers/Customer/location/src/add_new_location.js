var { con } = require("../../../../setting_require/require_Modules");

const AddNewLocation = (req, res) => {
    const user_name = req.body.user_name;
	const name = req.body.name;
    const address_user = req.body.address_user;
    const ward = req.body.ward;
    const districts = req.body.districts;
	const provinces = req.body.provinces;
	const code_provinces = req.body.code_provinces;
	const phone_number = req.body.phone_number;
	const default_location = req.body.default_location;
    con.connect(function (err) {
        var sql = "INSERT INTO `location_user` ( `user_name`, `name`, `address_user`, `ward`, `districts`, `provinces`,`code_provinces`, `phone_number`, `default_location`) VALUES ('"+user_name+"', '"+name+"', '"+address_user+"', '"+ward+"', '"+districts+"', '"+provinces+"','"+code_provinces+"', '"+phone_number+"', '"+default_location+"');";
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.send("success");
        });
    });
};

module.exports = {
    AddNewLocation,
};

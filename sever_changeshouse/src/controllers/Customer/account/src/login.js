var { con, md5 } = require("../../../../setting_require/require_Modules");

const Login = (req, res) => {
    const number_phone = req.body.number_phone;
    var password = req.body.password;
    password = md5(password + "@changeshop");

    con.connect(function (err) {
        var check_number_phone = "SELECT * FROM `account` WHERE `account`.`user_name`='" + number_phone + "'";
        con.query(check_number_phone, function (err_check, result_check) {
            if (err_check) throw err_check;
            if(result_check.length==0){
				res.json({data:result_check,title:"account_not_exit"});
			}else if(password != result_check[0].password){
				res.json({data:result_check,title:"password_error"});
			}else{
				res.json({data:result_check,title:"success"});
			}
        });
    });
};

module.exports = {
    Login,
};

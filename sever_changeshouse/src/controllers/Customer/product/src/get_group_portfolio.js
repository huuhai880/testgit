var { con } = require("../../../../setting_require/require_Modules");
const async = require('async');
const GetGroupPortfolio = (req, res) => {

    con.connect(function (err) {
        let sql = "SELECT * FROM `group_portfolio` ORDER BY `group_portfolio`.`id_group_portfolio` ASC";
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result)
        }
        );
    });
};

module.exports = {
    GetGroupPortfolio,
};

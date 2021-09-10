var { con } = require("../../../../setting_require/require_Modules");

const FillterProduct = (req, res) => {

    con.connect(function (err) {
        var sql = "SELECT * FROM `group_portfolio` WHERE 1";
        con.query(sql, function (err_group, result_group) {
            if (err_group) throw err_group;
            var sql = "SELECT * FROM `product_portfolio` WHERE 1";
            con.query(sql, function (err, result) {
                if (err) throw err;
                res.json({group_portfolio:result_group,product_portfolio:result});
            });
        });
    });
};

module.exports = {
    FillterProduct,
};

var { con } = require("../../../../setting_require/require_Modules");

const GetColorProduct = (req, res) => {

    const id_product = req.body.id_product;

    con.connect(function (err) {
        var sql_color = "SELECT * FROM `color_product` WHERE `color_product`.`id_product`='" + id_product + "'";
        var sql_model = "SELECT `model_product`.`name_model` FROM `model_product` WHERE `model_product`.`id_product`='"+id_product+"'";
        con.query(sql_color, function (err_color, result_color) {
            if (err_color) throw err_color;
            con.query(sql_model, function (err_model, result_model) {
                if (err_model) throw err_model;
                res.json({data_color:result_color,data_model:result_model});
            });
            
        });
    });
};

module.exports = {
    GetColorProduct,
};

var { con } = require("../../../../setting_require/require_Modules");

const AddNewSalesInvoice = (req, res) => {

    const id_sales_invoice = req.body.id_sales_invoice;
    const user_name = req.body.user_name;
    const total_order = req.body.total_order;
    const shiping = req.body.shiping;
    const total_payment = req.body.total_payment;
    const id_location = req.body.id_location;
    const status = req.body.status;
    const status_payment = req.body.status_payment;
    const data_detail = req.body.data_detail;
    const new_data_detail = JSON.parse(data_detail);
    con.connect(function (err_connect) {
        const sql = "INSERT INTO `sales_invoice` (" +
            " `id_sales_invoice`," +
            "  `user_name`," +
            "  `total_order`," +
            "  `shiping`," +
            " `total_payment`," +
            " `id_location`," +
            " `status`," +
            " `status_payment`," +
            " `enable`)" +
            " VALUES(" +
            " '" + id_sales_invoice + "'," +
            " '" + user_name + "'," +
            " '" + total_order + "', " +
            " '" + shiping + "'," +
            " '" + total_payment + "'," +
            " '" + id_location + "'," +
            " '" + status + "'," +
            " '" + status_payment + "'," +
            " '0'); ";
        con.query(sql, async (err, result) => {
            if (err) throw err;
            let i = 0;
            while (i < new_data_detail.length) {
                let price = new_data_detail[i].price_sale == 0 ? new_data_detail[i].price_product : new_data_detail[i].price_sale;
                const sql_detal = "INSERT INTO `detail_sales_invoice` (`id_sales_invoice`, `id_product`, `name_product_detail`, `price_product_detail`, `count_product_detail`, `total_price_detail`, `image_detail`, `name_color_detail`, `name_model_detail`) " +
                    " VALUES (" +
                    " '" + id_sales_invoice + "'," +
                    " '" + new_data_detail[i].id_product + "'," +
                    " '" + new_data_detail[i].name_product + "'," +
                    " '" + price + "'," +
                    " '" + new_data_detail[i].count_product + "'," +
                    " '" + new_data_detail[i].total_price + "'," +
                    " '" + new_data_detail[i].image_color + "'," +
                    " '" + new_data_detail[i].name_color + "'," +
                    " '" + new_data_detail[i].model_product + "');";
                await con.query(sql_detal, async (err_detail, result_detail) => {
                    if (err_detail) throw err_detail;

                });
                const sql_delete_item = "DELETE FROM `detail_cart_product` WHERE `detail_cart_product`.`id_detail_cart` ='" + new_data_detail[i].id_detail_cart + "'";
                await con.query(sql_delete_item, async (err_delete, result_delete) => {
                    if (err_delete) throw err_delete;

                });

                i++;
            }
            if (i === new_data_detail.length) {
                res.send("success");
            }
        }
        );
    });
};



module.exports = {
    AddNewSalesInvoice,
};

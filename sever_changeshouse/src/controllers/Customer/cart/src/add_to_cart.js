var { con } = require("../../../../setting_require/require_Modules");

const AddToCart = (req, res) => {
    const id_detail_cart = req.body.id_detail_cart;
    const id_cart = req.body.id_cart;
    const id_product = req.body.id_product;
	const name_product = req.body.name_product;
    const price_product = req.body.price_product;
    const price_sale = req.body.price_sale;
    const count_product = req.body.count_product;
    const total_price_product = req.body.total_price_product;
    const color_product = req.body.color_product;
	const image_color = req.body.image_color;
    const model_product = req.body.model_product;
    const sell_price = req.body.sell_price;
    
    con.connect(function (err) {
        var sql_add_to_cart = "INSERT INTO `detail_cart_product`" +
            " (`id_detail_cart`," +
            " `id_cart`," +
            " `id_product`," +
			" `name_product`," +
            " `price_product`," +
            " `price_sale`," +
            " `count_product`," +
            " `total_price`," +
            " `name_color`," +
			" `image_color`," +
            " `model_product`," +
            " `sell_price`, " +
            " `enable`)" +
            " VALUES " +
            "('"+id_detail_cart+"'," +
            " '"+id_cart+"'," +
            " '"+id_product+"'," +
			" '"+name_product+"'," +
            " '"+price_product+"'," +
            " '"+price_sale+"'," +
            " '"+count_product+"'," +
            " '"+total_price_product+"'," +
            " '"+color_product+"'," +
			" '"+image_color+"'," +
            " '"+model_product+"'," +
            " '"+sell_price+"'," +
            " '0'); ";
        con.query(sql_add_to_cart, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    });
};

module.exports = {
    AddToCart,
};

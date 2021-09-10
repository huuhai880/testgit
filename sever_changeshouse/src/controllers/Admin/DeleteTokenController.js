var {  client } = require("../../setting_require/require_Modules");
const async = require('async');


let deteletoken = (req, res) => {
    const refreshTokenFromClient = req.body.refreshToken;

    try {
        client.get("jwt_token", (err, reply) => {
            if (err) throw err;
            const get_jwt_token = JSON.parse(reply);
            if (refreshTokenFromClient && (get_jwt_token[refreshTokenFromClient])) {

                delete get_jwt_token[refreshTokenFromClient];
            }
            client.set("jwt_token", JSON.parse(get_jwt_token));
        })
    } catch (error) {
        return res.status(500).json(error);
    }




}

module.exports = {
    deteletoken: deteletoken,
};
var { con } = require("../../../../setting_require/require_Modules");

const DeleteLocation = (req, res) => {
    const id_location = req.body.id_location;
    con.connect(function (err) {
       var sql = "DELETE FROM `location_user` WHERE `location_user`.`id_location` = '"+id_location+"'";
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.send('success');
        });
    });
};

module.exports = {
    DeleteLocation,
};

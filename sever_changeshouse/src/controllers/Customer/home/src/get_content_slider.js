var { con } = require("../../../../setting_require/require_Modules");

const GetContentSlider = (req, res) => {
	
    con.connect(function (err_connect) {
     con.query(
       "SELECT * FROM `image_slider`",
       function (err, result) {
         if (err) throw err;
         res.json(result);
       }
     );
   });
};



module.exports = {
  GetContentSlider,
};

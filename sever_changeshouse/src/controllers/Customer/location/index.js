var { router } = require("../../../setting_require/require_Modules");

var srcAddNewLocation = require("./src/add_new_location");
var srcGetLocation = require("./src/get_location");
var srcUpdateLocation = require("./src/update_location");
var srcDeleteLocation = require("./src/delete_location");


router.post("/AddNewLocation", srcAddNewLocation.AddNewLocation);
router.post("/GetLocation", srcGetLocation.GetLocation);
router.post("/UpdateLocation", srcUpdateLocation.UpdateLocation);
router.post("/DeleteLocation", srcDeleteLocation.DeleteLocation);

module.exports = router;

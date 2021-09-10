var { router } = require("../../../setting_require/require_Modules");

var srcRestinger = require("./src/restinger");
var srcLogin = require("./src/login");
var srcUpdateProfile = require("./src/update_profile");
var srcChangePassword = require("./src/change_password");

router.post("/Restinger", srcRestinger.Restinger);
router.post("/Login", srcLogin.Login);
router.post("/UpdateProfile", srcUpdateProfile.UpdateProfile);
router.post("/ChangePassword", srcChangePassword.ChangePassword);


module.exports = router;

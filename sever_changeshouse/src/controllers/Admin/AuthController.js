
const jwtHelper = require("../../helpers/jwt.helper");
var { con, md5, client } = require("../../setting_require/require_Modules");
// Biến cục bộ trên server này sẽ lưu trữ tạm danh sách token
// Trong dự án thực tế, nên lưu chỗ khác, có thể lưu vào Redis hoặc DB


// Thời gian sống của token
const accessTokenLife = process.env.ACCESS_TOKEN_LIFE || "1h";
// Mã secretKey này phải được bảo mật tuyệt đối, các bạn có thể lưu vào biến môi trường hoặc file
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || "access-token-secret-hainhpk01124@gmail.com@Hai50612596";
// Thời gian sống của refreshToken
const refreshTokenLife = process.env.REFRESH_TOKEN_LIFE || "3650d";
// Mã secretKey này phải được bảo mật tuyệt đối, các bạn có thể lưu vào biến môi trường hoặc file
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || "access-token-secret-hainhpk01124@gmail.com@Hai50612596";


let login = async (req, res) => {
  const username = req.body.params.username;
  let password = req.body.params.password;
  const permission = req.body.params.permission;
  password = md5(password + "@changeshop");

  try {
    const userFakeData = {
      username: username,
      password: password,
      permission: permission,

    };
    con.connect(function (err) {
      let sql = "SELECT * FROM `account` WHERE `account`.`user_name`='" + username + "'";
      con.query(sql, async function (err_check, result_check) {
        if (err_check) throw err_check;

        if (result_check.length === 0) {

          res.status(200).json({ data: result_check, title: "account_not_exit" });

        } else if (password !== result_check[0].password) {

          res.status(200).json({ data: result_check, title: "password_error" });

        } else if (permission !== result_check[0].permission) {

          res.status(200).json({ data: result_check, title: "error_permisstion" });

        } else if (permission === result_check[0].permission) {

          const accessToken = await jwtHelper.generateToken(userFakeData, accessTokenSecret, accessTokenLife);
          const refreshToken = await jwtHelper.generateToken(userFakeData, refreshTokenSecret, refreshTokenLife);
          let tokenList = {};
          tokenList[refreshToken] = { accessToken, refreshToken };
          client.get("jwt_token", (err, reply) => {
            if (err) throw err;
            if (reply === null) {
              client.set("jwt_token", JSON.stringify(tokenList));
            } else {
              let new_jwt_token = [...reply];

              new_jwt_token.concat(tokenList);
              client.set("jwt_token", JSON.stringify(new_jwt_token));
            }
          });
          return res.status(200).json({ data: result_check, title: "success", accessToken, refreshToken });

        }

      });
    });
  } catch (error) {

    return res.status(500).json(error);
  }
}


let refreshToken = async (req, res) => {
  // User gửi mã refresh token kèm theo trong body
  const refreshTokenFromClient = req.body.refreshToken;

  client.get("jwt_token", async (err, reply) => {
    if (err) throw err;
    if (reply !== null) {
      const get_jwt_token = JSON.parse(reply);
      // Nếu như tồn tại refreshToken truyền lên và nó cũng nằm trong tokenList của chúng ta

      if (refreshTokenFromClient && (get_jwt_token[refreshTokenFromClient])) {
        try {
          // Verify kiểm tra tính hợp lệ của cái refreshToken và lấy dữ liệu giải mã decoded 
          const decoded = await jwtHelper.verifyToken(refreshTokenFromClient, refreshTokenSecret);

          // Thông tin user lúc này các bạn có thể lấy thông qua biến decoded.data
          // có thể mở comment dòng debug bên dưới để xem là rõ nhé.

          const userFakeData = decoded.data;

          const accessToken = await jwtHelper.generateToken(userFakeData, accessTokenSecret, accessTokenLife);

          // gửi token mới về cho người dùng

          get_jwt_token[refreshTokenFromClient].accessToken = accessToken;

          client.set("jwt_token", JSON.stringify(get_jwt_token));

          return res.status(200).json({ accessToken });

        } catch (error) {
          // Lưu ý trong dự án thực tế hãy bỏ dòng debug bên dưới, mình để đây để debug lỗi cho các bạn xem thôi
          res.status(403).json({
            message: 'Invalid refresh token.',
          });

        }
      } else {
        // Không tìm thấy token trong request
        return res.status(403).send({
          message: 'No token provided.',
        });
      }
    }
  });

};

const check_authetication = async (req,res) => {
  res.send("authetication_sucssess");
}


module.exports = {
  login: login,
  refreshToken: refreshToken,
  check_authetication: check_authetication,
}
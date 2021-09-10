const jwt = require("jsonwebtoken");

/**
 tạo token jwt
 */
let generateToken = (user, secretSignature, tokenLife) => {
    return new Promise((resolve, reject) => {
        // Định nghĩa những thông tin của user
        const userData = {
            _id: user._id,
            name: user.name,
            email: user.email,
        }
        // Thực hiện ký và tạo token
        jwt.sign(
            { data: userData },
            secretSignature,
            {
                algorithm: "HS256",
                expiresIn: tokenLife,
            },
            (error, token) => {
                if (error) {
                    return reject(error);
                }
                resolve(token);
            });
    });
}

/**
 kiểm tra token jwt
 */
let verifyToken = (token, secretKey) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (error, decoded) => {
            if (error) {
                return reject(error);
            }
            resolve(decoded);
        });
    });
}

module.exports = {
    generateToken: generateToken,
    verifyToken: verifyToken,
};
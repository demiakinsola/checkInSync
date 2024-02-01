const Teacher = require("../model/teacher");
const jwt = require("jsonwebtoken");


const newRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    // console.log(cookies);
    if (!cookies?.jwt) {
        return res.sendStatus(401);
    }
    const refreshToken = cookies.jwt;
    const foundUser = await Teacher.findOne({ refreshToken });
    // console.log('found');
    if (!foundUser) {
        return res.sendStatus(403);
    }
    //verify the token
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err || foundUser.email !== decoded.email ) {
            return res.sendStatus(403);
        }
        const accessToken = jwt.sign(
          { email: decoded.email },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "60s" }
        );
        res.json({ accessToken });
    }
    )
    
};

module.exports = { newRefreshToken };
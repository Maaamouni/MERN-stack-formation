import jwt from "jsonwebtoken";
/* 
on va creer un token JWT et l'envoyer au navigateur via cookie securise.

jwt.sign : creer un token
jwt.verify : verifier un token

jwt.sign(payload, secret, options)

*/
const generateToken = (res, userId) => {
    const token = jwt.sign({userId}, process.env.JWT_TOKEN, {
        expiresIn: "30d",
    });

    // set JWT as an HTTP-Only Cookie

    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 30*24*60*60*1000,
    });

    return token;
}

export default generateToken;
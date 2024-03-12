import jwt from "jsonwebtoken";
const requireAuth = (req, res, next) => {
    // read the saved cookie the containe  the jwt token
  const token = req.cookies.jwt;
    console.log(token)
  if (token) {
    jwt.verify(token, "chat123", (err, decodedToken) => {
        // verify the token using the verify function takes : token , secret , callback function
      if (err) {
        console.log(err.message);
        res.status(403).send({ msg: "require login" });
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.status(403).send({ msg: " require login" });
  }
};
export default requireAuth;

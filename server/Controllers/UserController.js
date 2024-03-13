import User from "../Models/UserModel.js";
import jwt from "jsonwebtoken";

const handlErrors = (err) => {
  let errors = { username: "", email: "", password: "" };

  if (err.message === "incorrect password") {
    errors.username = "incorrect password";
  }
  if (err.message === "incorrect username") {
    errors.password = "incorrect username";
  }
  if (err.code == 11000) {
    errors.username = "username already in use ";
    errors.email = "email already in use";
    return errors;
  }
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const maxAge = 60 * 1000 * 59 * 24;

const createToken = (id) => {
  return jwt.sign({ id }, "chat123", { expiresIn: maxAge });
};

const userController = {
  login_get: (req, res) => {
    res.send({ msg: "login page" });
  },
  login_post: async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.login(username, password);
      const token = createToken(user._id);
      res.cookie("jwt", token, { maxAge: maxAge * 2024 });
      res.status(200).json({ user: user._id });
    } catch (err) {
      const erros = handlErrors(err);
      res.status(400).send({ erros });
    }
  },
  signup_get: (req, res) => {
    res.send({ msg: "sign up page" });
  },
  signup_post: async (req, res) => {
    // get the info from the user
    const { username, email, password } = req.body;
    try {
      const user = await User.create({ username, email, password });
      // save the user in db
      const token = createToken(user._id);
      //create a token for the successfully signup suser
      res.cookie("jwt", token, { expiresIn: maxAge * 2024 });
      console.log(token);
      // insert the token in a cookie named JWT
      res.status(200).send({ user: user._id });
    } catch (err) {
      const errors = handlErrors(err);
      res.status(400).send({ errors });
    }
  },
  // test required middlware
  home: (req, res) => {
    res.status(200).send({ msg: "this the protected route" });
  },
  logout: (req, res) => {
    res.cookie("jwt", "", { expiresIn: 1 });
    res.status(200).json("Good");
  },
};

export default userController;

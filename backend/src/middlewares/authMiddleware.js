import JWT from "jsonwebtoken";

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
        // console.log(req.JWT.token);
        // console.log(req.headers.authorization);
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

const { signup,signin, getAccountDetailsById, editAccountDetailsById, googleLogin } = require("../controller/userController");
const userRouter = require("express").Router();

userRouter.post("/signup",signup);
userRouter.post("/signin",signin);
userRouter.post("/get/detail",getAccountDetailsById);
userRouter.post("/edit/detail",editAccountDetailsById);
userRouter.post('/google-login',googleLogin);

module.exports = userRouter;
const { addBlog, getAllBlogs } = require("../controller/blogController");

const blogRouter = require("express").Router();


blogRouter.post("/add", addBlog);
blogRouter.get("/all", getAllBlogs);

module.exports = blogRouter;
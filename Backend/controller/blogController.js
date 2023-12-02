const Blog = require("../models/blogModel");

const addBlog = async (req, res) => {
  try {
    const { title, desc, image, userpic, username, date } = req.body;
    if (!title || !desc || !image || !userpic || !username || !date) {
        res.status(400).json({message:'Missing required fields'});
        return;
    }
    const newBlog = new Blog({
      title,
      desc,
      image,
      userpic,
      username,
      date,
    });

    const savedBlog = await newBlog.save();
    if (!savedBlog) {
        res.status(400).json({ "message": "Failed to save the blog details!!!" });
      } else {
        res.status(200).json({ "message": "Successfully saved the blog details.", "blog": savedBlog });
      }
  } catch (error) {
    console.error("Error adding blog:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error getting blogs:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  addBlog,
  getAllBlogs,
};

// {
//   "id": 4,
//   "title": "If You’re Retired Like Me",
//   "desc": "I get to work with retired people who have enjoyed very successful business careers. They…",
//   "image": "/images/blog4.jpg",
//   "userpic": "/images/user.jpg",
//   "username": "Sandy MacDougall",
//   "date": "May 10, 2022"
// }
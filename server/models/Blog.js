const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    requite: true,
  },
  img: String,
  body: {
    type: String,
    requite: true,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = { Blog };
